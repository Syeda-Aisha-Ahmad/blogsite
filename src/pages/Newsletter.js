import React from 'react';

const Newsletter = () => {
    return (
        <div className='md:flex my-24 justify-between px-3'>
            <div className='md:w-9/12 text-center md:text-left mb-5'>
                <h3 className='font-semibold text-3xl md:text-2xl mb-3'>Sign up to our newsletter</h3>
                <p className='text-lg'>Stay up to date with the latest news, announcements, and articles</p>
            </div>
            <div className=' rounded-xl md:w-8/12 lg:w-5/12 md:mx-auto p-1'>
                {/* <input type="text" placeholder="Enter your email" className="input input-bordered text-lg placeholder:text-gray-800  px-5 py-2 border-none w-full " /> */}
                <input type="text" placeholder="Type here" className="input input-bordered w-full lg:max-w-xs" />
                <button className='bg-black w-full lg:w-auto mt-2 text-white px-5 py-3 ml-2 rounded-xl'>Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;