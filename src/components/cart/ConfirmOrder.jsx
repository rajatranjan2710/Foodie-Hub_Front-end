import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../redux/actions/orderAction'
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'

const ConfirmOrder = () => {

    // shippingInfo,
    // orderItems,
    // paymentMethod,
    // itemsPrice,
    // taxPrice,
    // shippingCharges,
    // totalAmount,




    const { cartArray, subTotal, tax, shippingCharges, total, shippingInfo } = useSelector(state => state.cartt)


    const extractedCartData = cartArray.map(item => ({
        id:item.id,
        title: item.title,
        qty: item.qty,
        price: item.price,
    }));

    // const cartObject = {};

    // for (const item of extractedCartData) {
    //     cartObject[item.id] = {
    //         title:item.title,
    //         qty: item.qty,
    //         price: item.price
    //     };
    // }

    
    const navigate = useNavigate();


    const [paymentMethod, setPaymentMethod] = useState("")
    const [disableBtn, setDisableBtn] = useState(false)

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        setDisableBtn(true)
        if (paymentMethod === "COD") {
            dispatch(createOrder(shippingInfo, extractedCartData, paymentMethod, subTotal, shippingCharges, tax, total))
            navigate("/paymentsuccess")
        }
        else{
            toast.error("Comming soon")
        }
        console.log(extractedCartData)
        // console.log(cartObject);
    }



    return (
        <section className='confirmOrder'>
            <main>
                <h1>Confirm Order</h1>
                <form onSubmit={(e) => submitHandler(e)}>
                    <div>
                        <label>Cash on delivery</label>
                        <input type="radio" name='payment'
                            onChange={() => setPaymentMethod("COD")}
                            required />
                    </div>
                    <div>
                        <label>Online</label>
                        <input type="radio" name='payment'
                            onChange={() => setPaymentMethod("Online")}
                            required />
                    </div>
                    <button disabled={disableBtn} type='submit'>Place Order</button>

                </form>
            </main>
        </section>
    )
}

export default ConfirmOrder