import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="container footer__wrapper">
                <div className="footer__exclusive">
                    <ul>
                        <li><h3>Exclusive</h3></li>
                        <li><a href="#">Subscribe</a></li>
                        <li><a href="#">Get 10% off your first order</a></li>  
                    </ul>
                    <form action="">
                        <input type="text" placeholder="Enter your email" />
                        <button><img src="./images/footer/footer-send.svg" alt=""/></button>
                    </form>
    
                </div>
                <div className="footer__support">
                    <ul>
                        <li><h3>Support</h3></li>
                        <li><a href="#">111 Bijoy sarani, Dhaka,  <br/>  DH 1515, Bangladesh.</a></li>
                        <li><a href="#">exclusive@gmail.com</a></li>  
                        <li><a href="#">+88015-88888-9999</a></li>  
                    </ul>
                </div>
                <div className="footer__account">
                    <ul>
                        <li><h3>Account</h3></li>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Login / Register</a></li>  
                        <li><a href="#">Cart</a></li>  
                        <li><a href="#">Wishlist</a></li>  
                        <li><a href="#">Shop</a></li>  
                    </ul>
                </div>
                <div className="footer__quick">
                    <ul>
                        <li><h3>Quick Link</h3></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms Of Use</a></li>  
                        <li><a href="#">FAQ</a></li>  
                        <li><a href="#">Contact</a></li>  
                    </ul>
                </div>
                <div className="footer__download">
                    <h3>Download</h3>
                    <img src="./images/footer/footer-qrcode.png" alt=""/>
                    <div className="footer__socialmedias">
                        <img src="./images/footer/footer-facebook.svg" alt=""/>
                        <img src="./images/footer/footer-twitter.svg" alt=""/>
                        <img src="./images/footer/footer-instagram.svg" alt=""/>
                        <img src="./images/footer/footer-linkedin.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer