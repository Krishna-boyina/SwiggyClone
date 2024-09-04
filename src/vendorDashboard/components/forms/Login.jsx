import React, { useState } from 'react'
import { API_URL } from '../../data/apiPath';

const Login = ({ showWelcomeHandler }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/vendor/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            const data = await response.json();
            if (response.ok) {
                alert('login Success..')
                localStorage.setItem("loginToken", data.token)
                localStorage.setItem("username", data.username)
                setEmail("");
                setPassword("");
                showWelcomeHandler();
                // window.location.reload();
            }
            const vendorId = data.vendorId
            const vendorResponse = await fetch(`${API_URL}/vendor/single-vendor/${vendorId}`, {
                method: 'GET',
            })
            window.location.reload();
            const vendorData = await vendorResponse.json()
            if (vendorResponse.ok) {
                const vendorFirmId = vendorData.vendorFirmId
                const firmName = vendorData.vendor.firm[0].firmName
                // const username = vendorData.username
                console.log("Vendor Firm ID", vendorFirmId)
                localStorage.setItem("firmId", vendorFirmId)
                localStorage.setItem('firmName', firmName)
                // window.location.reload();
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="loginSection">
            <form action="" className='authForm' onSubmit={loginHandler}>
                <h3>Vendor Login</h3>
                <label htmlFor="">Email</label>
                <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' /><br />
                <label htmlFor="">Password</label>
                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' /><br />
                <div className="btnSubmit">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login
