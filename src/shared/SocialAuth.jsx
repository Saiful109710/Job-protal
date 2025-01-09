import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'

const SocialAuth = () => {

    const location = useLocation();
    const navigate = useNavigate()
    console.log(location)

    const from = location?.state || '/'

    const {signInWithGoogle,setLoading} = useContext(AuthContext)

    const handleGoogleLogIn=()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result)
            navigate(from)
            setLoading(false)

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
