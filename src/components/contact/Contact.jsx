import React from 'react'
import { motion } from 'framer-motion'
import chef from '../../assets/chef.png'


const Contact = () => {
    return (
        <section className='contact'>
            <motion.form
            initial={{
                x:"-100vh",
                opacity:0
            }}
            animate={{
                x:0,
                opacity:1
            }}

            >
                <h2>Contact Us</h2>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <textarea placeholder="Message...." cols="30" rows="10"></textarea>
                <button type='submit'>Send</button>
            </motion.form>
            <motion.div className='formBorder'>
                <motion.div
                initial={{
                    y:"100vh",
                    opacity:0,
                    x:"-40%"
                }}
                animate={{
                    y:0,
                    opacity:1,
                    x:"-40%"
                }}
                >
                    <img src={chef} alt="1" />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Contact