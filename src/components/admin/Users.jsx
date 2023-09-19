import React from 'react'
import me from '../../assets/avatar.jpg'

const Users = () => {
    const arr = [1,2,3,4,5]
  return (
    <section className='tableClass'>
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
            arr.map(i => (
                <tr key={i}>
                    <td>#ujshhkkwokx</td>
                    <td>Rajat</td>
                    <td>
                        <img src={me} alt="me" />
                    </td>
                    <td>2300</td>
                    <td>UPI</td>
                </tr>
            ))
        }
    </tbody>
</table>
</main>
    </section>
  )
}

export default Users