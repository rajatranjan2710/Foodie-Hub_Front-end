import React, { useState } from 'react'
import { Country, State } from 'country-state-city'
// import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"

const Shipping = () => {

    const navigate = useNavigate();

    const [hNo, setHNo] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [pinCode, setPinCode] = useState("")
    const [phoneNo, setPhoneNo] = useState("")

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({
            type: "addShippingInfo",
            payload: {
                hNo,
                city,
                state,
                country,
                phoneNo,
                pinCode
            }
        })
        localStorage.setItem("shippingInfo", JSON.stringify({
            hNo,
            city,
            state,
            country,
            phoneNo,
            pinCode
        }))
        navigate("/confirmorder")
    }





    return (
        <section className="shipping">
            <main>
                <h1>Shipping details</h1>
                <form onSubmit={(e) => submitHandler(e)}>
                    <div>
                        <label>Country</label>
                        <select
                            required
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}>
                            <option value="">Country</option>
                            {Country && Country.getAllCountries().map(i => (
                                <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                            ))}
                        </select>
                    </div>
                    {
                        country && (
                            <div>
                                <label>State</label>
                                <select required value={state} onChange={(e) => setState(e.target.value)}>
                                    {State && State.getStatesOfCountry(country).map(i => (
                                        <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                                    ))}
                                </select>
                            </div>
                        )
                    }
                    <div>
                        <label>Pin Code</label>
                        <input required type="number" placeholder='Enter pin-code' value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
                    </div>
                    <div>
                        <label>City</label>
                        <input required type="text" placeholder='Enter City' value={city}
                            onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div>
                        <label>House no.</label>
                        <input required type="text" placeholder='Enter complete address' value={hNo} onChange={(e) => setHNo(e.target.value)} />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input required type="number" placeholder='Enter mobile number' value={phoneNo}
                            onChange={(e) => setPhoneNo(e.target.value)} />
                    </div>
                    <button type='submit'>
                        {/* <Link to="/confirmorder" className='link'> */}
                        Confirm Order
                        {/* </Link>  */}
                    </button>
                </form>
            </main>
        </section>
    )
}

export default Shipping