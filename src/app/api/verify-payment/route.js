import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    // Log the incoming request
    console.log('Received verification request');

    const body = await request.json();
    console.log('Request body:', body);

    const { reference } = body;

    if (!reference) {
      console.log('No reference provided in request');
      return NextResponse.json({
        success: false,
        error: 'Payment reference is required',
        details: 'No reference provided in the request'
      }, { status: 400 });
    }

    // Check if Paystack secret key is available
    if (!process.env.PAYSTACK_SECRET_KEY) {
      console.error('PAYSTACK_SECRET_KEY is not defined in environment variables');
      return NextResponse.json({
        success: false,
        error: 'Server configuration error',
        details: 'PAYSTACK_SECRET_KEY environment variable is not set. Please check your .env.local file.'
      }, { status: 500 });
    }

    // Validate Paystack secret key format
    if (!process.env.PAYSTACK_SECRET_KEY.startsWith('sk_test_') && !process.env.PAYSTACK_SECRET_KEY.startsWith('sk_live_')) {
      console.error('Invalid PAYSTACK_SECRET_KEY format');
      return NextResponse.json({
        success: false,
        error: 'Server configuration error',
        details: 'Invalid PAYSTACK_SECRET_KEY format. Key should start with sk_test_ or sk_live_'
      }, { status: 500 });
    }

    console.log('Verifying payment with reference:', reference);
    console.log('Using Paystack secret key:', process.env.PAYSTACK_SECRET_KEY.substring(0, 8) + '...');

    try {
      // Verify payment with Paystack
      const response = await axios.get(
        `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
        {
          headers: {
            'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      console.log('Paystack API response status:', response.status);
      console.log('Paystack API response data:', response.data);

      const { data } = response.data;

      if (data.status === 'success') {
        return NextResponse.json({ 
          success: true, 
          data: {
            reference: data.reference,
            amount: data.amount,
            status: data.status,
            paidAt: data.paid_at,
            customer: data.customer
          }
        });
      } else {
        console.log('Payment verification failed - status not success:', data.status);
        return NextResponse.json(
          { success: false, error: 'Payment verification failed' },
          { status: 400 }
        );
      }
    } catch (paystackError) {
      console.error('Paystack API error:', {
        message: paystackError.message,
        response: paystackError.response?.data,
        status: paystackError.response?.status
      });

      // Handle specific Paystack API errors
      if (paystackError.response?.status === 404) {
        return NextResponse.json(
          { success: false, error: 'Payment reference not found' },
          { status: 404 }
        );
      }

      if (paystackError.response?.status === 401) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Invalid Paystack API key',
            details: 'The provided Paystack secret key is invalid or has expired'
          },
          { status: 401 }
        );
      }

      throw paystackError; // Re-throw to be caught by outer catch block
    }
  } catch (error) {
    // Log the full error details
    console.error('Payment verification error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers,
      stack: error.stack
    });

    // Return a more specific error message
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to verify payment',
        details: error.response?.data?.message || error.message
      },
      { status: 500 }
    );
  }
} 