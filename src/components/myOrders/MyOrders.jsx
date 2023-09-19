import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { orderDetails,getOrderById } from '../../redux/actions/orderDetails'
import Loader from '../loader/Loader'

const MyOrders = () => {


    const dispatch = useDispatch();
    const { myOrders,loading } = useSelector(state => state.details)
    useEffect(() => {
        dispatch(orderDetails())
    }, [])

    const getOrder = (id) =>{
        // console.log(id)
        dispatch(getOrderById(id))
    }

    const qty = (i) =>{
        let finalQty = 0
        i.map(index=>(
            finalQty = finalQty + index.qty
        ))
        // console.log("qty is "+finalQty)
        return finalQty
    }
    



    return (
        <section className="tableClass">
            {
                loading===false ?
                
                <main>


                <table>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Status</th>
                            <th>Qty</th>
                            <th>Amount</th>
                            <th>Payment method</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map(i => (
                                <tr key={i._id}>
                                    
                                    <td >{i._id}</td>
                                    <td>{i.order_Status}</td>
                                    <td>{qty(i.orderItems)}</td>
                                    <td>{i.total_Amount}</td>
                                    <td>{i.payment_Method}</td>
                                    <td><Link to={`/order/${i._id}`}><AiOutlineEye onClick={()=>getOrder(i._id)}/></Link></td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main> : <Loader/>
            }
        </section>
    )
}

export default MyOrders