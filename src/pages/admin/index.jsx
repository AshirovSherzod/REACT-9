import React from 'react'
import './admin.scss'

const Admin = () => {
  return (
    <section class="admin container row">
    <div class="admin__left">
        <ul>
            <li><h4>Manage My Account</h4></li>
            <li><a href="#">My Profile</a></li>
            <li><a href="#">Address Book</a></li>
            <li><a href="#">My Payment Options</a></li>
        </ul>
        <ul>
            <li><h4>My Orders</h4></li>
            <li><a href="#">My Returns</a></li>
            <li><a href="#">My Cancellations</a></li>
        </ul>
        <ul>
            <li><h4>My Wishliast</h4></li>
            <li><a href="#">My wishlist</a></li>
            <li><a href="#">My Cancellations</a></li>
        </ul>
    </div>
    <div class="admin__right">
        <form action="" class="admin__right__form">
                <h1>Edit Your Profile</h1>
                <div class="admin__right__form__top">
                    <div class="admin__right__input">
                        <label for="">First Name</label>
                        <input type="text" placeholder="Md" required/>
                    </div>
                    <div class="admin__right__input">
                        <label for="">Email</label>
                        <input type="text" placeholder="rimel1111@gmail.com" required/>
                    </div>
                    <div class="admin__right__input">
                        <label for="">Last Name</label>
                        <input type="text" placeholder="Rimel" required/>
                    </div>
                    <div class="admin__right__input">
                        <label for="">Address</label>
                        <input type="text" placeholder="Kingston, 5236, United State" required/>
                    </div>
                </div>

                <div class="admin__right__form__bottom">
                    <label for="">Password Changes</label>
                    <input type="password" placeholder="Current Passwod" required/>
                    <input type="password" placeholder="New Passwod" required/>
                    <input type="password" placeholder="Confirm New Passwod" required/>
                </div>
            <div class="admin__right__form__btns">
                <button>Cancel</button>
                <button>Save Changes</button>
                <button type="button" class="log__out">Log Out</button>
            </div>
        </form>
    </div>
</section>
  )
}

export default Admin