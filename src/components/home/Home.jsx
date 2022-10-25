import React from 'react';

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold tracking-wide">Welcome to<br></br> Course Arena Online <br/> Course</h1>
            <p className="py-6">This platform for you to develop your skill form here. You can learn several of course and grow your self.Best of luck !</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Home;