import React from 'react'
import me from '../../assets/avatar.jpg'
import {motion} from 'framer-motion'

const Founder = () => {
  return (
    <section className='founder'>
        <div className="avatar">

        <motion.img 
        initial={{
            x:"-100%",
            opacity:0
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        
        src={me} alt="1" />
        <h3>Rajat Ranjan
            
        </h3>
        <p>Founder of Foodie Hub. We are here to deliver the tastiest food in your area</p>
        </div>
    </section>
  )
}

export default Founder