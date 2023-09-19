
// import me from "../../assets/avatar.jpg"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdDashboard } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/userAction'
import Loader from "../loader/Loader"
import { adminStats } from '../../redux/actions/adminStats'

const Profile = () => {

    const { user, loading } = useSelector((state) => state.auth)

    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    }

    const getAdminStats =() =>{
        dispatch(adminStats())
    }

    const options = {
        initial: {
            y: "-100%",
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        }
    }
    return (
        <section className="profile">
           {
            loading===false?
            <section className="profile">
            <main>
               
                <motion.img src={user.photo} alt="1" {...options} />
                <motion.h5 {...options} transition={{delay:0.3}}>{user.name}</motion.h5>

                {
                    user && user.role==="admin"&&
                    <motion.div {...options} transition={{delay:0.5}} className='dboard'>
                    <Link to={"/admin/dashboard"} onClick={()=>getAdminStats()}> 
                    <MdDashboard/>Dashborad</Link>
                    </motion.div>
                }
               
                <motion.div 
                initial={{
                    x:"-100vw",
                    opacity:0
                }}
                animate={{
                    x:0,
                    opacity:1
                }}
                className='orders'>
                    <Link to={"/myorders"}> Orders</Link>
                </motion.div>
                <motion.button
                 initial={{
                    x:"-100vw",
                    opacity:0
                }}
                animate={{
                    x:0,
                    opacity:1
                }}
                transition={{
                    delay:0.3
                }}onClick={logoutHandler}
                >Logout</motion.button>
    
               
            </main>
        </section>:<Loader/>
           }
        </section>
    )
}

export default Profile