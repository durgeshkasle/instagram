import React from 'react'
import instagramLogoImage from '../assets/Instagram_logo.png'
import googlePlayImage from '../assets/googlePlay.png'
import appStoreImage from '../assets/appStore.png'
import facebookImage from '../assets/fb-icon.png'
import '../App.css'


const Login = () => {
  return (
    <div className="login-container">
        <div className='box-1'>
            <div className="box-1-logo">

                <img src={instagramLogoImage} alt="#" className='instagram-logo'/>

            </div>
            <div className="input-box">
                
                <input type="text" placeholder="Phone number, username, or email"/>

            </div>

            <div className="input-box">

                <input type="password" placeholder="Password" />

            </div>


            <div className="login-button-box">
                <button className="log-in-button">Log in</button>
            </div>




        </div>
        <div className='box-2'>
            <p>Don't have an account? <span className="sign-up-span">Sign up</span>
            </p>
        </div>
        <div className='get-app-box'></div>
        <div className='app-store-google-play-box'></div>
        

    </div>
  )
}

export default Login