import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye } from 'react-icons/ai'
import { BsArrowUpRight } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersAll, processOrder } from '../../redux/actions/adminOrder'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { getOrderById } from '../../redux/actions/orderDetails'
import Loader from '../loader/Loader'
// import { processOrder } from '../../redux/actions/adminOrder'



const Orders = () => {
    // const arr = [1,2,3,4,5]
    const { allOrders, loading } = useSelector(state => state.getAllOrders)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const {message,error} = useSelector(state => state.processOrder)


    const qty = (i) => {
        let finalQty = 0
        i.map(index => (
            finalQty = finalQty + index.qty
        ))
        // console.log("qty is "+finalQty)
        return finalQty
    }


    const getAdminOrdersById = (id) => {
        if (user.role === "admin") {
            dispatch(processOrder(id))
            // dispatch(getOrdersAll())
            if(message!==null){
                toast.success("Status Updated")
                dispatch({
                    type:"clearMessage"
                })
            }
            if(error!==null){
                toast.error("Food Already Delivered")
                dispatch({
                    type:"clearError"
                })
            }
        }



    }

    const getOrderDetails = (id) => {
        dispatch(getOrderById(id))
    }


    // useEffect(()=>{
    //     dispatch(getOrdersAll())
    // },[allOrders])
    useEffect(() => {
        dispatch(getOrdersAll())
    }, [dispatch])




    return (
        <section className='tableClass'>
            {
                loading === false ?
                    <main>


                        <table>
                            <thead>
                                <tr>
                                    <th>Order Id</th>
                                    <th>Status</th>
                                    <th>Qty</th>
                                    <th>Amount</th>
                                    <th>Payment method</th>
                                    <th>User</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allOrders.map(i => (
                                        <tr key={i._id}>
                                            <td>{i._id}</td>
                                            <td>{i.order_Status}</td>
                                            <td>{qty(i.orderItems)}</td>
                                            <td>{i.total_Amount}</td>
                                            <td>{i.payment_Method}</td>
                                            <td>{i.user.name}</td>
                                            <td><Link to={`/order/${i._id}`}><AiOutlineEye onClick={() => getOrderDetails(i._id)} /></Link>
                                                <button>
                                                    <BsArrowUpRight onClick={() => getAdminOrdersById(i._id)} />
                                                </button>
                                            </td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </main> :
                    <Loader />
            }
        </section>
    )
}

export default Orders