import React from 'react';
import Newsletter from '../../pages/Newsletter';

const Footer = () => {
  return (
    <div className='px-10 pt-5 pb-10 mt-20 bg-base-200 text-base-content'>
      <Newsletter />
      <footer className="footer ">
        <aside>
          <a className="btn btn-ghost normal-case text-xl md:text-2xl pl-0 font-bold">Blogsite</a>
          <p>A blogsite Ltd.<br />Providing reliable blogs since 2020</p>
        </aside>
        <nav>
          <header className="footer-title">Products</header>
          <a className="link link-hover font-bold">Branding</a>
          <a className="link link-hover font-bold">Design</a>
          <a className="link link-hover font-bold">
            Solutions
            <div className="badge badge-outline ml-2 px-1 text-[12px]">New</div>
          </a>
          <a className="link link-hover font-bold">Marketing</a>
          <a className="link link-hover font-bold">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover font-bold">About us</a>
          <a className="link link-hover font-bold">Contact</a>
          <a className="link link-hover font-bold">Jobs</a>
          <a className="link link-hover font-bold">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Resources</header>
          <a className="link link-hover font-bold">Blog</a>
          <a className="link link-hover font-bold">Newsletter</a>
          <a className="link link-hover font-bold">Events</a>
          <a className="link link-hover font-bold">Help center</a>
          <a className="link link-hover font-bold">Tutorials</a>
          <a className="link link-hover font-bold">Support</a>
        </nav>
        <nav>
          <header className="footer-title">Social</header>
          <a className="link link-hover font-bold">Twitter</a>
          <a className="link link-hover font-bold">LindedIn</a>
          <a className="link link-hover font-bold">Facebook</a>
          <a className="link link-hover font-bold">Github</a>
          <a className="link link-hover font-bold">AngelList</a>
          <a className="link link-hover font-bold">Dribbble</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover font-bold">Terms of use</a>
          <a className="link link-hover font-bold">Privacy policy</a>
          <a className="link link-hover font-bold">Cookie policy</a>
          <a className="link link-hover font-bold">Licenses</a>
          <a className="link link-hover font-bold">Settings</a>
          <a className="link link-hover font-bold">Contact</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;