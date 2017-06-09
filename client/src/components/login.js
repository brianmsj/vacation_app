import React from 'react';
import SocialLogin from 'react-social-login';
import {connect} from 'react-redux';
import {postUserData,loginUserPage,soundCloudIconOff} from '../actions/action';



 class Login extends React.Component {
    constructor(props) {
        super(props);

        this.handleSocialLogin=this.handleSocialLogin.bind(this);
        this.continueAsGuestClicked=this.continueAsGuestClicked.bind(this);
    }

 handleSocialLogin (user,err)  {
   const id = user._profile.id;
   const name= user._profile.name;
   const email= user._profile.email;
   const profilePicURL= user._profile.profilePicURL;
   const accessToken= user._token.accessToken;
   const expiresAt= user._token.expiresAt;

   this.props.dispatch(postUserData(name,id,profilePicURL,accessToken,expiresAt,email))
   this.props.dispatch(loginUserPage("google"))
 }

 handleGuestLogin (user,err)  {
   const id = "112129208462029037899";
   const name= "Demo Account";
   const email= "virtualvacaydemo@gmail.com";
   const profilePicURL= 'https://lh4.googleusercontent.com/-69jna7hMnn8/AAAAAAAAAAI/AAAAAAAAAAA/AAyYBF5Bs2iDGvlLG_L73SEKIY9ooQmjrA/s96-c/photo.jpg';
   const accessToken= 'ya29.GltkBMTsvFZh7K5Ny6KwYyOyC_QbKx72-WXf0Rodyb4vKSgt9rYPx-ei0OWvVjF9fOww83nCHNtnvHm4ZeXNkGbdX8vTUFYi2RhmEU0mMjSSf7Ny_dAgn7RKU8JN';
   const expiresAt= '1496987933712';

   this.props.dispatch(postUserData(name,id,profilePicURL,accessToken,expiresAt,email))
   this.props.dispatch(loginUserPage("google"))
 }

    render() {


             return (
                <div className="loginDiv" >
                 <SocialLogin
                     provider="google"
                      appId="1062078359952-7lgm593jaq7m620vm4c15i7d6gdgeqqn.apps.googleusercontent.com"
                     callback={this.handleSocialLogin} >
                     <button className="loginBtn loginBtn--google">SignIn Using Google</button>
                  </SocialLogin>

                  <p className="or">Or</p>
                  <SocialLogin
                      provider="google"
                       appId="1062078359952-7lgm593jaq7m620vm4c15i7d6gdgeqqn.apps.googleusercontent.com"
                      callback={this.handleGuestLogin} >
                    <button type="submit" className="home-guest">Continue as Guest </button>
                  </SocialLogin>
                </div>

        );
    }
}
export default connect()(Login)




// passport google??
