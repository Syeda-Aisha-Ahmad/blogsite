import React from 'react';

const Banner = () => {
    return (
        <div className='md:text-center px-8 md:px-0 py-32 md:py-36'>
            <h1 className='text-3xl md:text-5xl font-bold mb-6'>Inside Design: Stories and interviews</h1>
            <p className='text-xl mb-9 md:w-9/12 w-full mx-auto'>Subscribe to learn about new product features, the latest in technology, and updates</p>
            <div className='border border-gray-300 rounded-xl flex md:w-8/12 lg:w-5/12 md:mx-auto p-1'>
                <input type="text" placeholder="Enter your email" className="input text-lg placeholder:text-gray-800 text-red-800 px-5 py-2 border-none w-full " />
                <button className='bg-black text-white px-5 py-2 rounded-xl'>Subscribe</button>
            </div>
        </div>
    );
};

export default Banner;