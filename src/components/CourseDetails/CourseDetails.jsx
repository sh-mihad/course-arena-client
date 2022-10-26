import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    // console.log(courseDetails[0]);
    const{image_url,title,details,rating,instractor}= courseDetails[0];
    console.log(instractor)

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       
       <div className='text-center lg:text-end'>
       <button className="btn btn-wide text-right ">Download PDF</button>
       </div>
       
        <div className="p-8 rounded shadow-xl sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <img src={image_url} alt="" />
            </div>
            <div className="lg:w-1/2">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none mb-5">
               {title}
              </h2>
              <p className="mb-4 text-base text-gray-700">
               {
                details
               }
              </p>
              <div className='flex items-center mt-8 justify-between'>
              <p className=''>
              Instructor : <span className='font-bold'>{instractor.name}</span> 
              </p>
              <p>Publish Date : <span className='font-bold'>{instractor.published_date}</span></p>
              </div>
             <div className='mt-10'>
             <Link to="/checkout" className="btn btn-primary">Get Premium Access!</Link>
             </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails;