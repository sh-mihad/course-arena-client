import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../config/firebase/firebase.config';

export const UserAuth = createContext();
const AuthProvider = ({children}) => {
    
    const auth = getAuth(app)
    const [user,setUser] = useState(null);
    const [loading,setLoadin] = useState(true)

    //createUser with Email & Password
    const createUser =(email,password)=>{
        setLoadin(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    // login user 
    const loginUser =(email,password)=>{
        setLoadin(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // User Status
    useEffect(()=>{
        const unsbscirbe =onAuthStateChanged(auth,(createUser)=>{
            setUser(createUser)
            setLoadin(false)
        });

        return ()=>{
            unsbscirbe()
        }
    },[]);

    //user photo and name update
    const profileUpdate =(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL : photo
        })
    }

    //Log out user 
    const logOut =()=>{

        return signOut(auth)
    }

    // sign with Google 
    const googleAuthProvider = new GoogleAuthProvider();
    const googleSignIn =()=>{
        setLoadin(true)
      return  signInWithPopup(auth,googleAuthProvider)
    }

    // github signIn

    const githubProvider = new GithubAuthProvider();

    const githubSignIn =()=>{
        setLoadin(true)
        return signInWithPopup(auth,githubProvider)
    }
    

    const userInfo = {
        createUser,
        loginUser,
        user,
        profileUpdate,
        googleSignIn,
        githubSignIn,
        logOut,
        loading

    }

    return (
        <UserAuth.Provider value={userInfo}>
            {children}
        </UserAuth.Provider>
    );
};

export default AuthProvider;