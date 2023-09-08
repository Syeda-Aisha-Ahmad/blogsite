import React from 'react';

const Posts = () => {
    return (
        <div className='px-2 mt-5'>
            <h2 className='font-bold text-3xl mb-10'>Recent blog posts</h2>
            <div className='lg:flex gap-5'>
                {/* left side */}
                <div className='lg:w-1/2'>
                    <img src="https://newschoolarch.edu/wp-content/uploads/2019/01/How-to-Become-a-Product-Designer.jpg" alt="" />
                    <p className='mt-5 font-semibold'>Olivia Rhye, 20 Jan 2024</p>
                    <h3 className='text-2xl font-semibold mb-4'>Conversations with London Makr & Co.</h3>
                    <p className='mb-5'>We sat down with London's fast-growing brand and product design studio, Makr & Co. to find out how they've used Unititled UI to 2x their revenue. </p>
                    <div className='flex gap-2'>
                        <div className="badge badge-outline">Design</div> 
                        <div className="badge badge-outline">Research</div> 
                        <div className="badge badge-outline">Interviews</div> 
                    </div>
                </div>

                {/* right side */}
                <div className='lg:w-1/2'>

                    <div className='mt-10 lg:mt-0 md:flex gap-5 mb-5 items-center'>
                        <div className='md:w-1/2'>
                             <img className='' src="https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/bltf5fca6a3eec4d180/6139d40bec680b43eb02a9ee/US_London_UK_Header.jpg" alt="" />
                       </div>
                        <div className='md:w-1/2'>
                            <p className='font-semibold'>Phoneix Baker, 19 Jan 2024</p>
                            <h3 className='font-semibold text-xl mb-4 mt-2'>A Relentless Pursuit of Perfection in Product Design</h3>
                            <p className='mb-3'>"I began to notice that there was a sharp contrast between well-made ...</p>
                            <div className='flex gap-2'>
                                <div className="badge badge-outline">Design</div>
                                <div className="badge badge-outline">Research</div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10 md:mt-0 md:flex gap-5 mb-5 items-center'>
                        <div className='md:w-1/2'>
                             <img className='' src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/ba8c13c0-30c0-4977-8b6a-8181884ea98a.__CR0,0,2069,1280_PT0_SX970_V1___.jpg" alt="" />
                       </div>
                        <div className='md:w-1/2'>
                            <p className='font-semibold'>Phoneix Baker, 19 Jan 2024</p>
                            <h3 className='font-semibold text-xl mb-4 mt-2'>How to Run a Successful Business With Your Partner</h3>
                            <p className='mb-3'>"I began to notice that there was a sharp contrast between well-made ...</p>
                            <div className='flex gap-2'>
                                <div className="badge badge-outline">Business</div>
                                <div className="badge badge-outline">Research</div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10 md:mt-0 md:flex gap-5 mb-5 items-center'>
                        <div className='md:w-1/2'>
                             <img className='' src="https://images.squarespace-cdn.com/content/v1/60402ed669b9ec5adb57da21/119b5ca2-cdef-4a42-b7d3-c0a3e0867808/mary-mag-food-cover-wideedit-119.jpg?format=750w" alt="" />
                       </div>
                        <div className='md:w-1/2'>
                            <p className='font-semibold'>Phoneix Baker, 19 Jan 2024</p>
                            <h3 className='font-semibold text-xl mb-4 mt-2'>Why Food Matters - Disease Prevention & Treatment</h3>
                            <p className='mb-3'>"I began to notice that there was a sharp contrast between well-made ...</p>
                            <div className='flex gap-2'>
                                <div className="badge badge-outline">Health</div>
                                <div className="badge badge-outline">Research</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Posts;