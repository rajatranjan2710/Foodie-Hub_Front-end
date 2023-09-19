import { motion } from 'framer-motion'
import React from 'react'


const MenuCard = ({id,itemNum,imgSrc,price,title,handler, delay=0}) => {
  return (
    <motion.div className='menuCard'
    initial={{
        x:"-100%",
        opacity:0
    }}
    whileInView={{
        x:0,
        opacity:1
    }}
    transition={{
        delay,
    }}
    >
        <div>Item {itemNum}</div>
        <main>
            <img src={imgSrc} alt={itemNum} />
            <h5>₹{price}</h5>
            <p>{title}</p>
            <button onClick={()=>handler({id,itemNum,imgSrc,price,title,delay,qty:1})}>Add to cart</button>
        </main>
    </motion.div>
  )
}

export default MenuCard