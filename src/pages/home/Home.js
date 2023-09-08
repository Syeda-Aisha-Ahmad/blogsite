import React from 'react';
import Navbar from '../../Shared/navbar/Navbar';
import AllPosts from './AllPosts';
import Banner from './Banner';
import Posts from './Posts';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Posts />
            <AllPosts/>
        </div>
    );
};

export default Home;