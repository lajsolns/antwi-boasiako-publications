import OrderConfirmationTemplate from "../../email/order-confirmation-template.jsx";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { 
      orderData, 
      customerInfo, 
      deliveryInfo, 
      orderItems, 
      paymentInfo 
    } = await request.json();

    const data = await resend.emails.send({
      from: 'Antwi-Boasiako Publications <noreply@antwi-boasiako.com>',
      to: [customerInfo.email],
      subject: 'Order Confirmation - Antwi-Boasiako Publications',
      html: OrderConfirmationTemplate({
        orderData,
        customerInfo,
        deliveryInfo,
        orderItems,
        paymentInfo
      })
    });

    // Also send a notification to the admin
    const adminEmail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["info@antwi-boasiako.com"],
      subject: `New Order Received - ${paymentInfo.reference}`,
      react: OrderConfirmationTemplate({
        orderData,
        customerInfo,
        deliveryInfo,
        orderItems,
        paymentInfo
      }),
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Order confirmation email sent successfully',
      data: data
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to send order confirmation email',
      details: 'Please contact support for assistance'
    }, { status: 500 });
  }
} 