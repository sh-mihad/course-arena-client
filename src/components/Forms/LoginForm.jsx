import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserAuth } from '../../contexts/AuthProvider';
const LoginForm = () => {

  const { loginUser,googleSignIn,githubSignIn} = useContext(UserAuth)
  const navigate = useNavigate()

  const HandleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email,password)
    .then(result=>{
      const user = result.user;
      navigate("/")
      form.reset()
      // console.log(user);
    })
    .catch(error=>{
      console.error(error)
    })
  }

  const handleGoogleSignIn =()=>{
    googleSignIn()
    .then(resutl=>{
      const user = resutl.user;
      navigate("/")
      // console.log(user)
    })
    .catch(error=>{console.log(error)})
  }

  const handleGithubSignIn =()=>{
    githubSignIn()
    .then(result=>{
      const user = result.user;
      navigate("/")

    })
    .catch(error=>{
      console.log(error);
    })
  }


  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col w-full lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-xl font-bold text-center mt-4">Login now!</h1>
          <form className="card-body" onSubmit={HandleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name='email' className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' className="input input-bordered" required />
              <label className="label">
                <Link to="/register" className='text-blue-400'>Create an New Accout</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          
            <button onClick={handleGoogleSignIn} className=" btn btn-outline w-10/12 mx-auto mb-3">SignIn With Google</button>
            <button onClick={handleGithubSignIn} className=" btn btn-outline  w-10/12 mx-auto mb-6">SignIn With Github</button>
          
        </div>
      </div>
    </div>
  );
};

export default LoginForm;