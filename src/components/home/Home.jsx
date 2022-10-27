import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200 z-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl z-0" />
          <div>
            <h1 className="text-5xl font-bold tracking-wide">Welcome to<br></br> Course Arena Online <br/> Course</h1>
            <p className="py-6">This platform for you to develop your skill form here. You can learn several of course and grow your self.Best of luck !</p>
            <Link to="/course" className="btn btn-primary">Get Course</Link>
          </div>
        </div>
      </div>
    );
};

export default Home;