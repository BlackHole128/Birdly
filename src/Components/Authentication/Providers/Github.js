import  Lottie from 'lottie-react';
import React from 'react';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import githubAnim from "../../../Assets/81333-github.json"
import auth from '../../../firebase.init';

const Github = (props) => 
{
    
  const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    return (
        <button className='btn githubBtn' onClick={()=>signInWithGithub()}>
            
            <Lottie className='git-animation' animationData={githubAnim} loop={true}></Lottie>
            Sign up with github 
        </button>
    );
};

export default Github;