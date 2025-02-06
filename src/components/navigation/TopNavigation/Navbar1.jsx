import * as React from 'react';

const Navbar1 = () => {
  return (
    <>
      {/* Main Div */}
      <div className='grid grid-cols-3 gap-6' style={{ margin: "40px 200px", alignItems: "center" }}>
        {/* Logo Div */}
        <div>
          <img src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/mega-electronics-logo.svg" alt="logo" />
        </div>
        
        {/* SearchArea */}
        <div className="flex justify-center items-center">
        <label className="input input-bordered flex items-center gap-2 w-full max-w-md relative">
          <input type="text" className="grow pl-8" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 absolute left-2">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
      </div>
        
        {/* Contact */}
        <div className="flex justify-end space-x-6">
          <div className="flex items-center space-x-2">
            <img src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2023/02/support.svg" alt="support" className="h-6" />
            <div>
              <p className="text-sm font-bold">24 Support</p>
              <p className="text-sm">+1 234 567 890</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2023/02/worldwide.svg" alt="worldwide" className="h-6" />
            <div>
              <p className="text-sm font-bold">Worldwide</p>
              <a href="#" className="text-sm text-blue-500" style={{ textDecoration: 'none' }}>Free Shipping</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar1;