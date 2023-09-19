import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Foodie Hub</h2>
                <p>We try to provide the best
                    fast food <br />in your nearest location</p>


            </div>
            <div className='righs'>
                <strong>All rights reserved @foodiehub</strong>
            </div>

            <aside>
                <h3>Follow Us</h3>
                <div className="socials">
                    <a href="https://github.com/rajatranjan2710" target='blank'>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/rajat-ranjan-054036232/" target='blank' className='btns-footer'>
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/rjt27x/" target='blank'>
                        <FaInstagram />
                    </a>
                </div>

            </aside>
        </footer>

    )
}

export default Footer