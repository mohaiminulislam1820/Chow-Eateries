import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useLocation } from 'react-router-dom';
import auth from '../Firebase config/firebase_config';

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);

    const currentLocation=useLocation();

    const [loading,setLoading]=useState(true);

    const providerGoogle= new GoogleAuthProvider();
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,providerGoogle);
    }

    const providerGithub=new GithubAuthProvider();
    const signInWithGithub=()=>{
        return signInWithPopup(auth,providerGithub);
    }

    const createNewUserWithEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginWithEmail=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signOutUser=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            if(currentUser)
                setUser(currentUser)
            setLoading(false);
        });
        
   
        return ()=>unsubscribe();
    },[]);



    const contexts={user,setUser,createNewUserWithEmail,loginWithEmail,signOutUser,signInWithGoogle,signInWithGithub,currentLocation,loading};



    return (
        <AuthContext.Provider value={contexts}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;