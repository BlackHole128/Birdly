import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import BirdsLoading from "../../../Shared/Loaders/BIrdsLoading/BirdsLoading";
import Email from "../Providers/Email";
import Github from "../Providers/Github";
import Google from "../Providers/Google";

const Login = () => 
{

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

  let Logerror 

  if( error || googleError || gitError)
  {
    Logerror = <p className="text-danger">There is some error in login system. Please try again</p>
  }

  if(loading || googleLoading || gitLoading)
  {
    return <BirdsLoading></BirdsLoading>
  }
  

  return (
    <section className="login-container">
    <article className="container ml-auto mr-auto p-16">
    <div className="flex items-center my-10">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-xl font-semibold">
              Please Log in to Our App
            </h2>
            <Email type="login" login={signInWithEmailAndPassword}></Email>
            <div class="divider">OR</div>
            
            <Google></Google>
            <Github></Github>

            {Logerror}

            <p>
              New in Birdly ? Register{" "}
              <Link to="/signup" className="text-red-500">
                Here
              </Link>{" "}
              Now
            </p>
          </div>
        </div>
      </div>
    </article>
      
    </section>
  );
};

export default Login;
