import React from 'react'
import Founder from './Founder'
import burger from '../../assets/hamburger.png'
import Menu from './Menu'
import {motion} from 'framer-motion'


const Home = () => {
  return (
    <>

      <section className='home'>
        <div className='left'>


          <div>
            <motion.h1
            initial={{
              x:"-100%",
              opacity:0
            }}
            whileInView={{
              x:0,
              opacity:1
            }}
            transition={{
              delay:0.2
            }}
            >Foodie Hub</motion.h1>
            <motion.p
            initial={{
              x:"-100%",
              opacity:0
            }}
            whileInView={{
              x:0,
              opacity:1
            }}
            transition={{
              delay:0.4
            }}
            >
              urban and tasy food for everyone ,now in india
            </motion.p>
            <motion.a
            initial={{
              y:"100%",
              opacity:0
            }} 
            whileInView={{
              y:0,
              opacity:1
            }} 
            transition={{
              delay:0.6
            }}
            href="#menu">Explore Menu</motion.a>
          </div>
        </div>
        <div className="right">
          <div className="banner">
            <motion.img
            initial={{
              y:"-100%",
              opacity:0
            }} 
            whileInView={{
              y:0,
              opacity:1
            }}
            
            src={burger} alt="1" />
          </div>

        </div>


      </section>
      <Founder />
      <Menu/>
      
    </>
  )
}

export default Home