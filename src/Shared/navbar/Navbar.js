import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar justify-between bg-base-100">
      <div className="navbar md:w-4/12 justify-between lg:justify-normal">
        <a className="btn btn-ghost normal-case text-xl md:text-2xl font-bold">Blogsite</a>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

          {/* Small Device */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 right-0 shadow bg-base-100 rounded-box w-52">
            <li className='font-bold text-base'><a>Home</a></li>

            <li className='font-bold text-base' tabIndex={0}>
              <details>
                <summary>Products</summary>
                <ul className="p-2">
                  <li><a>Overview</a></li>
                  <li><a>Features</a></li>
                  <li><a>Solutions</a></li>
                  <li><a>Tutorials</a></li>
                  <li><a>Pricing</a></li>
                  <li><a>Releases</a></li>
                </ul>
              </details>
            </li>

            <li className='font-bold text-base' tabIndex={0}>
              <details>
                <summary>Solutions</summary>
                <ul className="p-2">
                  <li><a>Overview</a></li>
                  <li><a>Features</a></li>
                  <li><a>Solutions</a></li>
                  <li><a>Tutorials</a></li>
                  <li><a>Pricing</a></li>
                  <li><a>Releases</a></li>
                </ul>
              </details>
            </li>

            <li className='font-bold text-base'><a>Pricing</a></li>

            <li className='font-bold text-base' tabIndex={0}>
              <details>
                <summary>Resources</summary>
                <ul className="p-2">
                  <li><a>Blog</a></li>
                  <li><a>Newsletter</a></li>
                  <li><a>Events</a></li>
                  <li><a>Help center</a></li>
                  <li><a>Tutorials</a></li>
                  <li><a>Support</a></li>
                </ul>
              </details>
            </li>

            <li className='font-bold text-base' tabIndex={0}>
              <details>
                <summary>Company</summary>
                <ul className="p-2">
                  <li><a>About us</a></li>
                  <li><a>Careers</a></li>
                  <li><a>Press</a></li>
                  <li><a>News</a></li>
                  <li><a>Media kit</a></li>
                  <li><a>Contact</a></li>
                </ul>
              </details>
            </li>

            <li className='font-bold text-base' tabIndex={0}>
              <details>
                <summary>Careers</summary>
                <ul className="p-2">
                  <li><a>About us</a></li>
                  <li><a>Careers</a></li>
                  <li><a>Press</a></li>
                  <li><a>News</a></li>
                  <li><a>Media kit</a></li>
                  <li><a>Contact</a></li>
                </ul>
              </details>
            </li>

            <li className='font-bold text-base'><button className='border-2 rounded-xl border-black'>Get started</button></li>
          </ul>
        </div>

      </div>

      <div className=" hidden lg:flex">

        {/* Large Device */}
        <ul className="menu menu-horizontal px-1">
          <li className='font-bold text-base'><a>Home</a></li>

          <li className='font-bold text-base' tabIndex={0}>
            <details>
              <summary>Products</summary>
              <ul className="p-2">
                <li><a>Overview</a></li>
                <li><a>Features</a></li>
                <li><a>Solutions</a></li>
                <li><a>Tutorials</a></li>
                <li><a>Pricing</a></li>
                <li><a>Releases</a></li>
              </ul>
            </details>
          </li>

          <li className='font-bold text-base' tabIndex={0}>
            <details>
              <summary>Solutions</summary>
              <ul className="p-2">
                <li><a>Overview</a></li>
                <li><a>Features</a></li>
                <li><a>Solutions</a></li>
                <li><a>Tutorials</a></li>
                <li><a>Pricing</a></li>
                <li><a>Releases</a></li>
              </ul>
            </details>
          </li>

          <li className='font-bold text-base'><a>Pricing</a></li>

          <li className='font-bold text-base' tabIndex={0}>
            <details>
              <summary>Resources</summary>
              <ul className="p-2">
                <li><a>Blog</a></li>
                <li><a>Newsletter</a></li>
                <li><a>Events</a></li>
                <li><a>Help center</a></li>
                <li><a>Tutorials</a></li>
                <li><a>Support</a></li>
              </ul>
            </details>
          </li>

          <li className='font-bold text-base' tabIndex={0}>
            <details>
              <summary>Company</summary>
              <ul className="p-2">
                <li><a>About us</a></li>
                <li><a>Careers</a></li>
                <li><a>Press</a></li>
                <li><a>News</a></li>
                <li><a>Media kit</a></li>
                <li><a>Contact</a></li>
              </ul>
            </details>
          </li>

          <li className='font-bold text-base' tabIndex={0}>
            <details>
              <summary>Careers</summary>
              <ul className="p-2">
                <li><a>About us</a></li>
                <li><a>Careers</a></li>
                <li><a>Press</a></li>
                <li><a>News</a></li>
                <li><a>Media kit</a></li>
                <li><a>Contact</a></li>
              </ul>
            </details>
          </li>

          <li className='font-bold text-base'><button className='border-2 rounded-xl border-black'>Get started</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;