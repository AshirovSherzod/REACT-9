import React, { useState } from 'react'
import './login.scss'
import img from '../../assets/login-img.png'
import { useNavigate } from 'react-router-dom'
import axios from '../../api'

const Login = () => {
    let navigate = useNavigate()
    const [username, setUsername] = useState("mor_2314")
    const [password, setPassword] = useState("83r5^_")
    const [loading, setLoading] = useState(false)

    const handleLogin = e => {
        e.preventDefault()
        let user = {username, password}
        setLoading(true)
        console.log(user);
        axios
             .post("/auth/login", user)
             .then(res => {
                console.log(res.data)
                localStorage.setItem("x-auth-token", res.data.token)
                navigate("/admin")
             })
             .catch(err => console.log(err))
             .finally(setLoading(false))
    }

  return (
    <section className="login container">
            <div className="login__left">
                <img src={img} alt=""/>
            </div>
            <div className="login__right">
                <div className="login__right__title">
                    <h1>Log in to Exclusive</h1>
                    <p>Enter your details below</p>
                </div>
                <form onSubmit={handleLogin} action="" className="form">
                    <input 
                        className="input__username"
                        onChange={(e)=> setUsername(e.target.value)}
                        value={username}
                        type="text" 
                        placeholder="Email or Phone Number" 
                        required
                    />
                    <input 
                        className="input__password" 
                        onChange={(e)=> setPassword(e.target.value)}
                        value={password} 
                        type="password" 
                        placeholder="Password" 
                        required
                    />
                    <div className="form__btns">
                        <button disabled={loading}>{loading ? "Loading..." : "Log in" }</button>
                        <a href="#">Forget Password?</a>
                    </div>
                </form>
            </div>
        </section>
  )
}

export default Login