import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye } from 'react-icons/ai'
import { BsArrowUpRight } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminOrderById } from '../../redux/actions/adminOrder'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { getOrdersAll } from '../../redux/actions/processOrder'


const Orders = () => {
    const arr = [1,2,3,4,5]
    const {allOrders} = useSelector(state => state.getAllOrders)
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const qty = (i) =>{
        let finalQty = 0
        i.map(index=>(
            finalQty = finalQty + index.qty
        ))
        // console.log("qty is "+finalQty)
        return finalQty
    }

    const {message, loading , error} = useSelector(state => state.processOrder)

    const getAdminOrdersById = (id) =>{
        if(user.role==="admin"){
            dispatch(getAdminOrderById(id))
            dispatch(getOrdersAll())
        }
        
        
        
    }
    


  return (
    <section className='tableClass'>
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
                    <td><Link to={``}><AiOutlineEye onClick={()=>getAdminOrdersById(i._id)} /></Link>
                    <button>
                        <BsArrowUpRight/>
                    </button>
                    </td>

                </tr>
            ))
        }
    </tbody>
</table>
</main>
    </section>
  )
}

export default Orders