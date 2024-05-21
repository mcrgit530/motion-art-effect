// Footer.js
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-900 flex p-3  text-center justify-center  bottom-0 w-auto ">
      <div >
        <p className="text-gray-300  px-96" >&copy; {currentYear}. All rights reserved by QodeMatrix</p>
      </div>
      <div className="text-gray-300 text-right ">
        <div><p>Documents</p></div>
        <div className='text-right'><p>Support</p></div>
      </div>
    </footer>
  );
}

export default Footer;
