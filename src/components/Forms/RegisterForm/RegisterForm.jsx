import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../contexts/AuthProvider';

const RegisterForm = () => {

 const {createUser,profileUpdate,googleSignIn,githubSignIn} = useContext(UserAuth);
 const navigate = useNavigate();
 const location = useLocation();
 const from =location.state?.from?.pathname || "/";

    const handleRegister =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
    
        createUser(email,password)
        .then((result)=>{
          const user = result.user;
          uppdateProfile(name,photo)
          form.reset()
          console.log(user);
        })
        .catch(error=>{
          console.log(error)
        })
      }

      const uppdateProfile =(name,photo)=>{
        profileUpdate(name,photo)
        .then(()=>{})
        .catch((error)=>{console.error(error)})
      }


      const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(resutl=>{
          const user = resutl.user;
          navigate(from, { replace: true });
          // console.log(user)
        })
        .catch(error=>{console.log(error)})
      }
    
      const handleGithubSignIn =()=>{
        githubSignIn()
        .then(result=>{
          const user = result.user;
          navigate(from, { replace: true });
    
        })
        .catch(error=>{
          console.log(error);
        })
      }
    

    return (
        <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content flex-col w-full lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-xl font-bold text-center mt-4">Register now!</h1>
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Full Name" name='name' className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" placeholder="Photo url" name='photo' className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered"  required/>
                <label className="label">
                 <Link to="/login" className='text-blue-400'>Alrady have an accout?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <button onClick={handleGoogleSignIn} className=" btn btn-outline w-10/12 mx-auto mb-3">Sign With Google</button>
            <button onClick={handleGithubSignIn} className=" btn btn-outline  w-10/12 mx-auto mb-6">Sign With Github</button>
          </div>
        </div>
      </div>
    );
};

export default RegisterForm;