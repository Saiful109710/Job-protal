import Lottie from 'lottie-react';
import React, { useContext } from 'react'
import logInLottie from '../../assets/lottie/loginLottie.json'
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialAuth from '../../shared/SocialAuth';
import { useLocation, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> 96423754fb3413c255a20edb6005d9b1c28efb5a

const SignIn = () => {

    const {signInUser} =  useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
   
    console.log(location)

    const from = location?.state || '/'

        const handleSubmit = (e)=>{
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log(email,password)

            signInUser(email,password)
            .then(result=>{
<<<<<<< HEAD
                console.log("sign in",result.user.email)


=======
                console.log("sign in",result.user)
>>>>>>> 96423754fb3413c255a20edb6005d9b1c28efb5a
                navigate(from)
                
            })
            .catch(err=>{
                console.log(err)
            })

        }

  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <Lottie animationData={logInLottie}></Lottie>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
        
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="divider">OR</div>
        <div className='px-5 py-5'>
            <SocialAuth></SocialAuth>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignIn
