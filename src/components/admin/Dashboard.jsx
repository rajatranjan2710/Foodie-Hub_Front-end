import React from 'react'
import { Link } from 'react-router-dom'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, Legend, Tooltip, ArcElement } from 'chart.js'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersAll } from '../../redux/actions/processOrder'
import Loader from '../loader/Loader'

ChartJS.register(Legend, Tooltip, ArcElement)

const Box = ({ value, title }) => (
    <div>
        <h3>
            {title === "Income" && "₹"}
            {value}</h3>
        <p>{title}</p>
    </div>
)

const Dashboard = () => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);
    const {response,loading} = useSelector(state => state.adminStats)

    const getAllOrders = ()=>{
        if(user.role==="admin"){
            dispatch(getOrdersAll())
        }
        
    }

    // const preparing = response.ordersCount.preparing
    console.log(typeof(preparing))
    const data = {
        labels: ["Preparing","Shipped","Delivered"],
        datasets: [
            {
                label: "# of orders",
                // data: [response.ordersCount.preparing,
                //      response.ordersCount.shipped,
                //      response.ordersCount.delivered 


                // ],
                // res: response.ordersCount,
                data:[2,3,4],
                backgroundColor: ["rgba(152,87,124,0.1)",
                    "rgba(123,65,165,0.2)",
                    "rgba(98,76,123,0.3)"],
                borderColor: ["rgb(152,87,124)",
                    "rgb(123,65,165)",
                    "rgb(98,76,123)"],
                borderWidth: 1
            }]
    }
    return (
        <section className="dashboard">
           {
            loading===false?
            <main>
            <article>

                <Box value={response.userCount} title={"Users"} />
                <Box value={response.ordersCount.total} title={"Orders"} />
                <Box value={response.totalIncome} title={"Income"} />
            </article>
            <section>
                <div>
                    <Link to="/admin/orders" onClick={()=>getAllOrders()}>View Orders</Link>
                    <Link to={"/admin/users"}>View Users</Link>
                </div>
                <aside>
                    <Doughnut data={data} />
                </aside>
            </section>
        </main>:<Loader/>
           }
        </section>
    )
}

export default Dashboard