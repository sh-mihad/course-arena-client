import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthProvider';


const PrivetRout = ({children}) => {
   const {user,loading} = useContext(UserAuth)
   const location = useLocation();
   // code start form here
    if(loading){
        return <button className="btn loading">loading</button>
    }
   if(!user){
      return <Navigate to="/login" ></Navigate>
   }
   return children
};

export default PrivetRout;