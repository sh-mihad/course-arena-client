import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"
import app from '../config/firebase/firebase.config';

export const UserAuth = createContext();
const AuthProvider = ({children}) => {
    
    const auth = getAuth(app)
    const [user,setUser] = useState(null);

    //createUser with Email & Password
    const createUser =(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
    }

    // login user 
    const loginUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // User Status
    useEffect(()=>{
        const unsbscirbe =onAuthStateChanged(auth,(createUser)=>{
            setUser(createUser)
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
    

    const userInfo = {
        createUser,
        loginUser,
        user,
        profileUpdate,
        logOut
    }

    return (
        <UserAuth.Provider value={userInfo}>
            {children}
        </UserAuth.Provider>
    );
};

export default AuthProvider;