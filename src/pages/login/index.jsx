import React from 'react'
import './login.scss'
import img from '../../assets/login-img.png'

const Login = () => {
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
                <form action="" className="form">
                    <input className="input__username" type="text" value="mor_2314" placeholder="Email or Phone Number" required/>
                    <input className="input__password" type="password" value="83r5^_" placeholder="Password" required/>
                    <div className="form__btns">
                        <button type="submit">Log In</button>
                        <a href="#">Forget Password?</a>
                    </div>
                </form>
            </div>
        </section>
  )
}

export default Login