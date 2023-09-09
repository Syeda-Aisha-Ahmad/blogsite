import React from 'react';
import Footer from '../../Shared/footer/Footer';
import Navbar from '../../Shared/navbar/Navbar';
import Newsletter from '../Newsletter';
import AllPosts from './AllPosts';
import Banner from './Banner';
import Pagination from './Pagination';
import Posts from './Posts';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Posts />
            <AllPosts />
            {/* <hr /> */}
            {/* <Pagination/> */}
            <Footer />
        </div>
    );
};

export default Home;