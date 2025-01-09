import React, { Children, useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> 96423754fb3413c255a20edb6005d9b1c28efb5a


    const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const createUser = (email,password)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth)
    }




    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log('state captured',currentUser)
<<<<<<< HEAD

            if(currentUser?.email){
                const user1 = {email:currentUser.email}
                axios.post('http://localhost:7000/jwt',user1,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                    setLoading(false)
                })

            }else{
                axios.post('http://localhost:7000/logout',{},{
                    withCredentials:true
                })
                .then(res=>{
                    console.log('login token',res.data)
                    setLoading(false)
                })
            }

            
=======
>>>>>>> 96423754fb3413c255a20edb6005d9b1c28efb5a
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        loading,
        setLoading,
        user,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
