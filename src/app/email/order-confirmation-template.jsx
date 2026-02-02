import React from "react";

const OrderConfirmationTemplate = ({
  orderData,
  customerInfo,
  deliveryInfo,
  orderItems,
  paymentInfo
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      color: "#333",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
    }}
  >
    <div style={{ 
      backgroundColor: "#1C1917", 
      color: "white", 
      padding: "20px", 
      textAlign: "center",
      borderRadius: "8px 8px 0 0"
    }}>
      <h1 style={{ margin: "0", fontSize: "24px" }}>Order Confirmation</h1>
      <p style={{ margin: "5px 0 0 0", opacity: "0.8" }}>Thank you for your purchase!</p>
    </div>

    <div style={{ 
      backgroundColor: "#f9f9f9", 
      padding: "20px", 
      border: "1px solid #ddd",
      borderRadius: "0 0 8px 8px"
    }}>
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#1C1917", borderBottom: "2px solid #05a6db", paddingBottom: "10px" }}>
          Order Details
        </h2>
        <p><strong>Order Reference:</strong> {paymentInfo.reference}</p>
        <p><strong>Order Date:</strong> {new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}</p>
        <p><strong>Payment Status:</strong> <span style={{ color: "#67CB93", fontWeight: "bold" }}>Paid</span></p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#1C1917", borderBottom: "2px solid #05a6db", paddingBottom: "10px" }}>
          Customer Information
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <div>
            <p><strong>Name:</strong> {customerInfo.firstName} {customerInfo.lastName}</p>
            <p><strong>Email:</strong> {customerInfo.email}</p>
          </div>
          <div>
            <p><strong>Phone:</strong> {customerInfo.phoneNumber}</p>
            <p><strong>Country:</strong> {customerInfo.country}</p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#1C1917", borderBottom: "2px solid #05a6db", paddingBottom: "10px" }}>
          Delivery Information
        </h2>
        {deliveryInfo.method === 'ship' ? (
          <div>
            <p><strong>Delivery Method:</strong> Shipping</p>
            <p><strong>Shipping Address:</strong></p>
            <div style={{ 
              backgroundColor: "white", 
              padding: "15px", 
              borderRadius: "5px", 
              border: "1px solid #ddd",
              marginTop: "10px"
            }}>
              <p style={{ margin: "5px 0" }}>{deliveryInfo.address}</p>
              <p style={{ margin: "5px 0" }}>{deliveryInfo.city}, {deliveryInfo.state}</p>
              {deliveryInfo.postalCode && <p style={{ margin: "5px 0" }}>Postal Code: {deliveryInfo.postalCode}</p>}
              {deliveryInfo.landmark && <p style={{ margin: "5px 0" }}>Landmark: {deliveryInfo.landmark}</p>}
              <p style={{ margin: "5px 0" }}>Country: {deliveryInfo.country}</p>
            </div>
            <p style={{ 
              backgroundColor: "#05a6db", 
              color: "white", 
              padding: "10px", 
              borderRadius: "5px",
              marginTop: "15px",
              fontSize: "14px"
            }}>
              <strong>Note:</strong> We will contact you within 24 hours to arrange delivery and confirm shipping costs.
            </p>
          </div>
        ) : (
          <div>
            <p><strong>Delivery Method:</strong> Store Pickup</p>
            <p><strong>Pickup Location:</strong></p>
            <div style={{ 
              backgroundColor: "white", 
              padding: "15px", 
              borderRadius: "5px", 
              border: "1px solid #ddd",
              marginTop: "10px"
            }}>
              <p style={{ margin: "5px 0", fontWeight: "bold" }}>{deliveryInfo.pickupLocation.name}</p>
              <p style={{ margin: "5px 0" }}>{deliveryInfo.pickupLocation.address}</p>
              <p style={{ margin: "5px 0" }}>Phone: {deliveryInfo.pickupLocation.phone}</p>
            </div>
            <p style={{ 
              backgroundColor: "#67CB93", 
              color: "white", 
              padding: "10px", 
              borderRadius: "5px",
              marginTop: "15px",
              fontSize: "14px"
            }}>
              <strong>Note:</strong> Please bring a valid ID and this order confirmation when picking up your order.
            </p>
          </div>
        )}
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#1C1917", borderBottom: "2px solid #05a6db", paddingBottom: "10px" }}>
          Order Items
        </h2>
        <div style={{ 
          backgroundColor: "white", 
          borderRadius: "5px", 
          border: "1px solid #ddd",
          overflow: "hidden"
        }}>
          {orderItems.map((item, index) => (
            <div key={index} style={{ 
              padding: "15px", 
              borderBottom: index < orderItems.length - 1 ? "1px solid #eee" : "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div style={{ flex: "1" }}>
                <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>{item.title}</p>
                <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>
                  Quantity: {item.quantity} × {paymentInfo.currency} {item.price}
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ margin: "0", fontWeight: "bold" }}>
                  {paymentInfo.currency} {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ 
        backgroundColor: "#1C1917", 
        color: "white", 
        padding: "20px", 
        borderRadius: "5px",
        textAlign: "right"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <span>Subtotal:</span>
          <span>{paymentInfo.currency} {paymentInfo.subtotal.toFixed(2)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <span>Delivery Method:</span>
          <span>{deliveryInfo.method === 'ship' ? 'Shipping' : 'Store Pickup'}</span>
        </div>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          borderTop: "1px solid #333", 
          paddingTop: "10px",
          fontSize: "18px",
          fontWeight: "bold"
        }}>
          <span>Total:</span>
          <span>{paymentInfo.currency} {paymentInfo.total.toFixed(2)}</span>
        </div>
      </div>

      <div style={{ 
        marginTop: "30px", 
        padding: "20px", 
        backgroundColor: "#f0f8ff", 
        borderRadius: "5px",
        border: "1px solid #05a6db"
      }}>
        <h3 style={{ color: "#1C1917", marginTop: "0" }}>What&apos;s Next?</h3>
        {deliveryInfo.method === 'ship' ? (
          <ul style={{ margin: "10px 0", paddingLeft: "20px" }}>
            <li>We&apos;ll contact you within 24 hours to arrange delivery</li>
            <li>Shipping costs will be calculated based on your location</li>
            <li>You&apos;ll receive tracking information once shipped</li>
          </ul>
        ) : (
          <ul style={{ margin: "10px 0", paddingLeft: "20px" }}>
            <li>Your order will be prepared within 1-2 business days</li>
            <li>We&apos;ll contact you when your order is ready for pickup</li>
            <li>Please bring a valid ID and this confirmation when collecting</li>
          </ul>
        )}
      </div>

      <div style={{ 
        marginTop: "30px", 
        textAlign: "center", 
        padding: "20px", 
        backgroundColor: "#f9f9f9",
        borderRadius: "5px"
      }}>
        <p style={{ margin: "0 0 10px 0" }}>
          <strong>Thank you for choosing Antwi-Boasiako Publications!</strong>
        </p>
        <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
          If you have any questions, please contact us at info@antwi-boasiako.com
        </p>
      </div>
    </div>
  </div>
);

export default OrderConfirmationTemplate; 