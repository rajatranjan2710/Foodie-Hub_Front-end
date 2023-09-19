import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import me from '../../assets/avatar.jpg'
import {motion} from 'framer-motion'

const About = () => {
    return (
        <section className='about'>
            <motion.main
             initial={{
                        x:"-100vw",
                        opacity:0
                    }}
                    animate={{
                        x:0,
                        opacity:1
                    }}
            >
                <h1>About Us</h1>
                <article>
                    <motion.img 
            
                    src={me} alt="me" />
                    <h4>Foodie Hub</h4>
                    <p>Welcome to Foodie Hub, your ultimate destination for all things food and culinary exploration!

                        At Foodie Hub, we're passionate about the art of cooking, the joy of savoring delicious dishes, and the excitement of discovering new flavors from around the world. We believe that food has the incredible power to bring people together, to create lasting memories, and to nourish not only our bodies but also our souls.

                        Our mission is simple yet profound: to inspire, educate, and connect food enthusiasts of all levels. Whether you're a seasoned chef looking for advanced techniques, a home cook seeking quick and easy recipes, or a curious foodie eager to learn about diverse cuisines, we have something special in store for you.</p>
                        
                        <Link to="/"><p className='explore'>Explore our menu.
                            <AiOutlineSearch/>
                        </p>
                        </Link>

                        
                </article>
            </motion.main>
        </section>
    )
}

export default About