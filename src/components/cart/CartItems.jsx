import React from 'react'
import {motion } from 'framer-motion'



const CartItems = ({ title, id, img, increment, decrement,qty,option }) => {

    const options = {
        initial:{
            x:"100%",
            opacity:0
        },
        animate:{
            x:0,
            opacity:1
        }
    }
    return (
        <motion.div className="cartItem" {...options} >
            <div className='title'>
                <h4>{title}</h4>
                <img src={img} alt="item" />
            </div>
            <div className='button'>
                <button onClick={()=>decrement(id)}>-</button>
                <span>{qty}</span>
                <button onClick={()=>increment(id)}>+</button>
            </div>
        </motion.div>
    )
}

export default CartItems