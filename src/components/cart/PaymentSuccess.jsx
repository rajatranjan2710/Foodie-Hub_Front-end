import React from 'react'
import {Link} from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <section className="paymentSuccess">
        <main>
            <h1>Order Confirmed</h1>
            <p>order placed successfully, you can check order status below</p>
            <Link to="/myorders">Check Status</Link>
        </main>
    </section>
  )
}

export default PaymentSuccess