"use client";
import React from 'react';

const ShippingPolicyContent = () => {
  return (
    <>
      <section id="delivery-coverage" className="mb-10 scroll-mt-28">
        <h2 className="text-2xl font-bold text-stone-100 mb-4">1. Delivery Coverage</h2>
        <div className="prose prose-invert max-w-none text-stone-400 leading-7">
          <p>
            Currently, delivery is available exclusively within Accra for all online purchases through our trusted delivery partner. We are excited to announce that delivery across Ghana will be available in the near future. Customers will be notified as soon as expanded delivery becomes available.
          </p>
        </div>
      </section>

      <section id="delivery-timeframes" className="mb-10 scroll-mt-28">
        <h2 className="text-2xl font-bold text-stone-100 mb-4">2. Delivery Timeframes</h2>
        <div className="space-y-6 prose prose-invert max-w-none text-stone-400 leading-7">
          <div>
            <h3 className="text-lg font-semibold text-stone-200">2.1 Standard Orders (Non-Bulk)</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Orders placed before 12:00 PM (Monday-Friday): Same-day delivery</li>
              <li>Orders placed after 12:00 PM (Monday-Friday): Next business day by 12:00 PM</li>
              <li>Weekend orders: Next business day delivery</li>
              <li>Public Holiday orders: Next business day delivery</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-stone-200">2.2 Bulk Orders</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Orders placed before 10:00 AM (Monday-Friday): Next business day delivery</li>
              <li>Orders placed after 10:00 AM (Monday-Friday): Delivery within 48 hours</li>
              <li>Weekend orders (Saturday-Sunday): Delivery within two business days</li>
              <li>Public Holiday orders: Delivery within two business days</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="delivery-process" className="mb-10 scroll-mt-28">
        <h2 className="text-2xl font-bold text-stone-100 mb-4">3. Delivery Process</h2>
        <div className="space-y-6 prose prose-invert max-w-none text-stone-400 leading-7">
          <div>
            <h3 className="text-lg font-semibold text-stone-200">3.1 Order Processing</h3>
            <p>
              Once your order is confirmed and payment is processed, we prepare your items and hand them over to our delivery partner for prompt dispatch.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-stone-200">3.2 Delivery Contact</h3>
            <p>
              Our delivery partner will contact you by phone before dispatch to confirm your availability and delivery address.
            </p>
          </div>
        </div>
      </section>

      <section id="delivery-requirements" className="mb-10 scroll-mt-28">
        <h2 className="text-2xl font-bold text-stone-100 mb-4">4. Delivery Requirements</h2>
        <div className="prose prose-invert max-w-none text-stone-400 leading-7">
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-semibold text-stone-200">Customer Availability:</span> Someone must be present to receive the package at the designated address</li>
            <li><span className="font-semibold text-stone-200">Contact Accessibility:</span> Customer must be reachable by phone during delivery</li>
            <li>
              <span className="font-semibold text-stone-200">Failed Delivery Attempts:</span>
              <p className="mt-1">If delivery cannot be completed:</p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Our delivery partner will attempt redelivery based on their standard procedures</li>
                <li>Customer may be required to collect from a designated pickup point</li>
                <li>Additional redelivery fees may apply as per delivery partner&#39;s policy</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section id="partner-policies" className="mb-10 scroll-mt-28">
        <h2 className="text-2xl font-bold text-stone-100 mb-4">5. Delivery Partner Policies</h2>
        <div className="space-y-6 prose prose-invert max-w-none text-stone-400 leading-7">
          <div>
            <h3 className="text-lg font-semibold text-stone-200">5.1 Third-Party Delivery Instructions</h3>
            <p>
              When customers request delivery to a third party (friend, family member, colleague), both Antwi-Boasiako Publications and our delivery partner cannot be held responsible for any damage, loss, or mishandling of items after successful delivery to the designated recipient.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-stone-200">5.2 Delivery Issues</h3>
            <p className="mb-2">
              For any delivery-related concerns (delays, damaged packages, failed delivery attempts), customers should:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact our delivery partner directly by phone</li>
              <li>Contact Antwi-Boasiako Publications customer service for order-related issues</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="important-conditions" className="mb-10 scroll-mt-28">
        <h2 className="text-2xl font-bold text-stone-100 mb-4">6. Important Conditions</h2>
        <div className="prose prose-invert max-w-none text-stone-400 leading-7">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              All delivery commitments are contingent upon:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Item availability in stock</li>
                <li>Successful payment processing</li>
                <li>Accurate delivery information provided by customer</li>
                <li>Delivery partner&#39;s operational capacity and policies</li>
              </ul>
            </li>
            <li>Delivery times are estimates and may vary due to traffic, weather, or other circumstances beyond our control</li>
            <li>Antwi-Boasiako Publications is responsible for order accuracy and item condition upon handover to delivery partner</li>
          </ul>
        </div>
      </section>

      <section id="delivery-fees" className="mb-10 scroll-mt-28">
        <h2 className="text-2xl font-bold text-stone-100 mb-4">7. Delivery Fees</h2>
        <div className="prose prose-invert max-w-none text-stone-400 leading-7">
          <p className="mb-2">
            Delivery charges will be clearly displayed at checkout and are determined by:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Delivery location within Accra</li>
            <li>Order size and weight</li>
            <li>Delivery speed selected</li>
            <li>Our delivery partner&#39;s current rate structure</li>
          </ul>
        </div>
      </section>

      <section id="contact-info" className="mb-10 scroll-mt-28">
        <h2 className="text-2xl font-bold text-stone-100 mb-4">8. Contact Information</h2>
        <div className="prose prose-invert max-w-none text-stone-400 leading-7">
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold text-stone-200">For Order Issues</span> – contact Antwi-Boasiako Publications customer service</li>
            <li><span className="font-semibold text-stone-200">For Delivery Status/Issues</span> – contact our delivery partner by phone</li>
            <li><span className="font-semibold text-stone-200">Customer Service Hours:</span> 8AM – 5PM</li>
          </ul>
        </div>
      </section>

      <div className="mt-10 pt-8 border-t border-stone-800">
        <p className="text-sm text-stone-500 italic">
          [This policy is subject to updates. Customers will be notified of any policy changes. Delivery partner terms and conditions also apply].
        </p>
      </div>
    </>
  );
};

export default ShippingPolicyContent;
