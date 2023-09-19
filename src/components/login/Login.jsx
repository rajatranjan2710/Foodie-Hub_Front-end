import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import {motion} from 'framer-motion'
import { server } from '../../redux/store'

const Login = () => {
    const loginHandler =()=>{
        window.open(`${server}/googlelogin`,"_self")
    }
    return (
        <section className="login">
            <main>
                <motion.form
                initial={{
                    x:"-100%",
                    opacity:0
                }}
                animate={{
                    x:0,
                    opacity:1
                }}
                >
                    <h2>Login</h2>
                    <div className="avatar"></div>
                    <input type="email" placeholder='Enter Your Email' />
                
                    <input type="password" placeholder='Enter your password'/>
                    <div className="btns">
                        <button>Login With Email</button>
                        <button onClick={loginHandler()}><FcGoogle /></button>
                    </div>

                </motion.form>
            </main>
        </section>
    )
}

export default Login