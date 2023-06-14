import React from 'react';
import "./provider.scss"
import Lottie from 'lottie-react'
import GoogleAnimation from "../../../Assets/92753-google-logo.json"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Google = (props) => 
{
    
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    return (
        <button className='btn google-btn' onClick={()=>signInWithGoogle()}>
            <Lottie className='google-animation' animationData={GoogleAnimation} loop={true}></Lottie>
            Sign Up with Google
        </button>
    );
};

export default Google;