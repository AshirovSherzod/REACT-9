import React from 'react'
import './header.scss'
import { FiSearch } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";
import { NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <header>
        <nav className="nav">
            <div className="nav__for_bg_t">
                <div className="nav__top container">
                    <div className="nav__top__middle">
                        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                        <a href="#">ShopNow</a>
                    </div>
                </div>
            </div>
            <div className="nav__for_bg_b">
                <div className="nav__bottom container row">
                    <div className="nav__bottom__left">
                        <a href="./index.html">
                            <h1>Exclusive</h1>
                        </a>
                    </div>
                    <div className="nav__bottom__middle">
                        <ul className="row">
                            <NavLink to={"/"}>Home</NavLink>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About</a></li>
                            <NavLink to={"/login"}>Sign In</NavLink>
                        </ul>
                    </div>
                    <div className="nav__bottom__right row">
                        <form action="">
                            <input type="text"  placeholder='What are you looking for?'/>
                            <button type='submit'><FiSearch className='nav__bottom__icon'/></button>
                        </form>
                        <IoHeartOutline className='nav__bottom__icons'/>
                        <PiShoppingCart className='nav__bottom__icons'/>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header