import React from 'react'
// import me from '../../assets/avatar.jpg'
import { useSelector } from 'react-redux'
import { dateShow } from '../../logics/dateConversion'
import Loader from '../loader/Loader'

const Users = () => {
    // const arr = [1,2,3,4,5]
    const { userArray, loading } = useSelector(state => state.getUsers)
    return (
        <section className='tableClass'>
            {
                loading === false ?
                    <main>


                        <table>
                            <thead>
                                <tr>
                                    <th>User Id</th>
                                    <th>Name</th>
                                    <th>Photo</th>
                                    <th>Role</th>
                                    <th>Since</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userArray.map(i => (
                                        <tr key={i._id}>
                                            <td>{i.googleId}</td>
                                            <td>{i.name}</td>
                                            <td>
                                                <img src={i.photo} alt="me" />
                                            </td>
                                            <td>{i.role}</td>
                                            <td>{dateShow(i.createdAt)}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </main> : <Loader />
            }
        </section>
    )
}

export default Users