import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../loader/Loader'

const AdminOrderDetails = () => {

    const { data, loading } = useSelector(state => state.getOrder)
    const createdAt = (createAt) => {
        // console.log(createAt)
        // console.log(typeof (createAt))
        const newCreate = createAt.split("T")
        const finalCreatedAt = newCreate[0]
        return finalCreatedAt
    }

    return (

        <section className="orderDetails">
            {
                loading === false ?
                    <>
                        <main>
                            <h1>Order Details</h1>
                            <div>
                                <h1>Shipping</h1>
                                <p>
                                    <b>Address</b>
                                    {data.shipping_Info.hNo + " " + data.shipping_Info.city + " " + data.shipping_Info.pinCode}
                                </p>
                            </div>
                            <div>
                                <h1>Contact</h1>
                                <p>
                                    <b>Name</b>
                                    {data.user.name}
                                </p>
                                <p>
                                    <b>Phone Number</b>
                                    {data.shipping_Info.phoneNo}
                                </p>
                            </div>
                            <div>
                                <h1>Status</h1>
                                <p>
                                    <b>Order Status</b>
                                    {data.order_Status}
                                </p>
                                <p>
                                    <b>Placed at</b>
                                    {createdAt(data.order_Created_At)}
                                </p>
                                <p>
                                    <b>Delivered at</b>
                                    {data.delivered_At ? data.delivered_At : "Not Delivered Yet"}
                                </p>
                            </div>
                            <div>
                                <h1>Payment</h1>
                                <p>
                                    <b>Payment Method</b>
                                    {data.payment_Method}
                                </p>
                                <p>
                                    <b>Paid at</b>
                                    {data.delivered_At ? data.delivered_At : "Not paid yet"}
                                </p>
                            </div>
                            <div>
                                <h1>Amount</h1>
                                <p>
                                    <b>Items Total</b>
                                    ₹{data.items_Price}
                                </p>
                                <p>
                                    <b>Shipping Charges</b>
                                    ₹{data.shipping_Charges}
                                </p>
                                <p>
                                    <b>Tax Charges</b>
                                    ₹{data.tax}
                                </p>
                                <p>
                                    <b>Total Amount</b>
                                    {data.total_Amount}
                                </p>
                            </div>
                        </main>
                        <article>
                            <h1>Ordered Items</h1>
                            {/* <div>
                    <h4>Burger with Coke</h4>
                    <div>
                        <span>{10}</span>X<span>{300}</span>
                    </div>
                </div>
                <div>
                    <h4>Veg Pizza</h4>
                    <div>
                        <span>{2}</span>X<span>{400}</span>
                    </div>
                </div>
                <div>
                    <h4>French Fries</h4>
                    <div>
                        <span>{4}</span>X<span>{200}</span>
                    </div>
                </div> */}

                            {
                                data.orderItems.map(i => (
                                    <div key={i.id}>
                                        <h4>{i.title}</h4>
                                        <div>
                                            <span>{i.qty}</span>X<span>{i.price}</span>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className='subtotal'>
                                <h4>SubTotal</h4>
                                <div>
                                    ₹{data.items_Price}
                                </div>
                            </div>
                        </article>
                    </> : <Loader />
            }
        </section>
    )
}

export default AdminOrderDetails