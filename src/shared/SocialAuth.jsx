import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext/AuthContext'

const SocialAuth = () => {

    const {signInWithGoogle} = useContext(AuthContext)

    const handleGoogleLogIn=()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result)
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
    <div>
        <button  onClick={handleGoogleLogIn} className='btn w-full'>Google Log In</button>
    </div>
  )
}

export default SocialAuth
