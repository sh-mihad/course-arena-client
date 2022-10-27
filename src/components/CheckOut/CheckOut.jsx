import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthProvider';

const CheckOut = () => {
  const products = useLoaderData();
  const {user} = useContext(UserAuth);
  console.log(products);
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
             
              {user.displayName}, Do you want to buy <span className='text-rose-500'>{products.title}</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
             your product id is : {products._id}
            </p>
          </div>
          <div>
            <button
             
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
            Proceed Order
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CheckOut;