import React from 'react'
import { motion } from 'framer-motion';
import MenuCard from './MenuCard';
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import fries from '../../assets/fries.png'
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const Menu = () => {

    const dispatch = useDispatch();

    const menuItems = [{
        itemNum:1,
        title:"Burger with fries",
        id: 1,
        price:200,
        imgSrc:burger1,
        delay:0.2

    },
    {
        itemNum:2,
        title:"Veg Pizza",
        id: 2,
        price:200,
        imgSrc:burger2,
        delay:0.5
    },
    {
        itemNum:3,
        title:"Fries",
        id: 3,
        price:200,
        imgSrc:fries,
        delay:0.8

    },
    {
        itemNum:4,
        title:"Burger with fries",
        id: 4,
        price:200,
        imgSrc:burger1,
        delay:0.9

    },
    {
        itemNum:4,
        title:"Burger with fries",
        id: 5,
        price:200,
        imgSrc:burger1,
        delay:1.3

    },
    {
        itemNum:4,
        title:"Burger with fries",
        id: 6,
        price:200,
        imgSrc:burger1,
        delay:1.5

    },

]

    const addToCart =(options)=>{
        // console.log("clicked")
        // console.log(options)
        toast.success("Added to cart")
        dispatch({
            type:"addToCart",
            payload:options
        });
        dispatch({
            type:"total",

        })
        
    }
    return (
        <section className="menu" id='menu'>
            <motion.h1
                initial={{
                    x: "-100%",
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
            >
                MENU</motion.h1>
            <div >
                {
                    menuItems.map((i)=>(
                        <MenuCard
                        key={i.id}
                        imgSrc={i.imgSrc}
                        itemNum={i.itemNum}
                        title={i.title}
                        price={i.price}
                        id={i.id}
                        delay={i.delay}
                        handler={addToCart}
                        
                        />
                    ))
                }

            </div>

        </section>
    )
}

export default Menu