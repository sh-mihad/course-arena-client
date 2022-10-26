import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthProvider';


const PrivetRout = ({children}) => {
   const {user,loading} = useContext(UserAuth)
   const location = useLocation();
   // code start form here
    if(loading){
        return <div className='text-center'><button className="btn loading ">loading</button></div>
    }
   if(!user){
      return <Navigate to="/login" state={{ from:location }} replace></Navigate>
   }
   return children
};

export default PrivetRout;