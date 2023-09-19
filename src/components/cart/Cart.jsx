import React from 'react'
import CartItems from './CartItems'
// import burger1 from '../../assets/burger1.png'
// import burger2 from '../../assets/burger2.png'
// import fries from '../../assets/fries.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const Cart = () => {
    
    const{cartArray,total,tax,shippingCharges,subTotal} = useSelector(state=> state.cartt)

   const invalidAttempt = ()=>{
    toast.error("Cart is empty")
   }

    const dispatch = useDispatch()

    const increment = (id)=>{
        // console.log(id)
        dispatch({
            type:"increment",
            payload:id
        })
        dispatch({
            type:"total"
        })
    }
    const decrement = (id)=>{
        dispatch({
            type:"decrement",
            payload:id
        })
        dispatch({
            type:"total"
        })
    }
    const clearCart = ()=>{
        dispatch({
            type:"clearCart"
        })
    }

    return (
        <section className='cart'>
            <main>
                {
                    cartArray.map((i)=>(
                        <CartItems title={i.title}
                        key={i.id}
                        id={i.id}
                        img={i.imgSrc}
                        qty={i.qty}
                        increment={increment}
                        decrement={decrement}/>
                    ))
                }
                <article>
                    <div>
                        <h4>SubTotal</h4>
                        <p>₹{subTotal}</p>
                    </div>
                    <div>
                        <h4>Tax</h4>
                        <p>₹{tax}</p>
                    </div>
                    <div>
                        <h4>Shipping Charges</h4>
                        <p>₹{shippingCharges}</p>
                    </div>
                    <div>
                        <h4>Total</h4>
                        <p>₹{total}</p>
                    </div>
                    
                    {
                        (cartArray.length===0)? (
                            <Link onClick={invalidAttempt} className='check'>Checkout</Link>
                        ):(<Link to={"/shipping"} className='check'>Checkout</Link>)
                    }
                    

                    {
                        (cartArray.length>0)&& (
                            <Link onClick={clearCart}className='check'>Clear</Link>
                        )
                    }
                </article>
            </main>

        </section>
    )
}

export default Cart