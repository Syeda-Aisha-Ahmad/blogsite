import React from 'react';
import Navbar from '../../Shared/navbar/Navbar';
import Banner from './Banner';
import Posts from './Posts';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Posts/>
        </div>
    );
};

export default Home;