import React from 'react'
import instagramLogoImage from '../assets/Instagram_logo.png'
import googlePlayImage from '../assets/googlePlay.png'
import appStoreImage from '../assets/appStore.png'
import facebookImage from '../assets/fb-icon.png'
import '../App'


class Login extends React.Component 
{

    handleInput(value,key){
        console.log(value,key);
    }
    handleForm(){
        console.log("Form Submitted");
    }


    render(){
    
        return (

            <>
        
        <div className="login-container">
        <div className="box-1">
            <div className="box-1-logo">

                <img src={instagramLogoImage} alt="#" className="instagram-logo"/>

            </div>
            <div className="input-box">
                
                <input type="text" 
                 placeholder="Phone number, username, or email"
                 onChange={(data) => this.handleInput(data.target.value,"username")}
                 />

            </div>

            <div className="input-box">

                <input type="password" 
                 placeholder="Password" 
                 onChange={(data) => this.handleInput(data, "password")}
                 />

            </div>


            <div className="login-button-box">
                <button className="log-in-button"
                onClick={this.handleForm}>Log in</button>
            </div>

            <div className="Lines-box">
                
                <div className="Line-1"></div>
                <div className="or-box">OR</div>
                <div className="Line-2"></div>




            </div>    


            <div className="fb-box">
                <span>

                    <img src={facebookImage} alt="#" className="fb-logo"/>

                </span>

                <p className="fb-link">log in with Facebook</p>
            </div>


            <div className="forgotten-password-box">

                <p className="forgotten-password-link"> Forgotten your password?</p>
            </div>




        </div>
        <div className="box-2">
            <p>Don't have an account? <span className="sign-up-span">Sign up</span>
            </p>
        </div>
        <div className="get-app-box">
            <p>Get the app.</p>
        </div>
        <div className="app-store-google-play-box">

        <img src={appStoreImage} alt="#" className="app-store-image"/>
        <img src={googlePlayImage} alt="#" className="google-play-image"/>



        </div>
        

    </div>

    </>
  )

 }

}


export default Login