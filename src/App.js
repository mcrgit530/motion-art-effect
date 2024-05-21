import React from 'react';
import { Link, Element } from 'react-scroll';
import './index.css';
import Footer from './Footer';
import logo from './images/MotionArtEffect-logo.png';
import img1 from './images/motionarteffect-img1.png';
import img2 from './images/motionarteffect-img2.png';
import img3 from './images/motionarteffect-img3.png';
import img4 from './images/motionarteffect-img4.png';
import img5 from './images/motionarteffect-img5.png';
import img6 from './images/motionarteffect-img6.png';
import img7 from './images/motionarteffect-img7.png';
import img8 from './images/motionarteffect-img8.png';
import img9 from './images/motionarteffect-img9.png';
import img10 from './images/motionarteffect-img10.png';
import img11 from './images/motionarteffect-img11.png';

function App() {
  return (
    <div className="container mx-auto p-4 bg-gray-900 text-gray-300">
      <header className="fixed w-full top-0 left-0 bg-gray-800 p-4 z-10 flex items-center justify-between">
        <div className="logo">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="feature1" smooth={true} duration={500}>
                Ratings
              </Link>
            </li>
            <li>
              <Link to="feature2" smooth={true} duration={500}>
                Apply On
              </Link>
            </li>
            <li>
              <Link to="feature3" smooth={true} duration={500}>
                Features
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mt-20 pb-32 bg-dark">
        <Element name="feature1" className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 ">
        <div className="md:col-span-1 bg-customColor h-auto flex flex-col  p-4">
          <div className='px-32'>
          <div>
            <p className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent text-left text-xl">
              Transform Your Website
            </p>
          </div>
          <br />
          <div>
            <p className='text-left text-xl'>
              With Motion Art Effect
            </p>
          </div>
          </div>
        </div>

          <div className="md:col-span-1 bg-customColor h-auto flex flex-col   p-4 font-medium mt-4">
            <h1 className=" text-white text-6xl mt-4">Attract Your Visitors Attention With Colorful </h1>
            <h1 className="text-left  text-6xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mt-6 "> Motion Art Effect</h1>

            <h4 className=" text-sm md:text-base mt-8">
              Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
            </h4>
          </div>
          
        </Element>
        <div>
          <div className='justify-center flex text-xl bold'><p>Trusted by thousands of users around the world</p></div>
          <Element name="feature3" className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4 p-4 justify-center flex items-center px-32">
          <div className=" h-auto flex items-center p-4">
  <img src={img2} alt="img2" className="h-20 mr-4" />
  <div className="flex flex-col items-center">
    <img src={img4} alt="img4" className="h-4 mb-2" />
    <p>4.5 Score, 9 Reviews</p>
  </div>
</div>


<div className="bg-custom-purple h-auto flex items-center p-4">
  <img src={img1} alt="img2" className="h-20 mr-4" />
  <div className="flex flex-col items-center">
    <img src={img4} alt="img4" className="h-4 mb-2" />
    <p>4.5 Score, 9 Reviews</p>
  </div>
</div>
<div className=" h-auto flex items-center p-4">
  <img src={img3} alt="img2" className="h-20 mr-4" />
  <div className="flex flex-col items-center">
    <img src={img4} alt="img4" className="h-4 mb-2" />
    <p>4.5 Score, 9 Reviews</p>
  </div>
</div>

          </Element>
          </div>
        <Element name="feature2" className="bg-customColor h-auto flex flex-col md:flex-row items-center justify-center mt-4 p-4">
          <div className="flex-1 text-center md:text-left px-32">
            <h2 className="text-lg text-2xl">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2>
            <h5 className="mt-4 text-sm md:text-base">
              Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
            </h5>
            <div className="mt-4  md:text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 h-14  rounded-2xl w-64">
              <p className='justify-center flex '>Purchase From Envato &#x2192;</p>

              </div>
          </div>
          <div className="flex-1 mt-4 md:mt-0 flex justify-center">
            <img src={img5} alt="Feature" className="h-60" />
          </div>
        </Element>
        <div className='px-32'>
        <Element name="feature2" className=" h-auto flex items-center justify-center mt-4 p-4 px-64 ">
          <h2 className="text-center text-4xl text-white font-medium">Apply On Any Section Or Enable For Whole Page</h2>
        </Element>
        </div>
        
        <div className='px-32'>
        <Element name="feature3" className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 p-4 ">
  <div className="bg-gray-600  flex flex-col  p-4 rounded-2xl items-left" style={{ marginTop: '20px' }} >
    <h2 className="text-left text-3xl text-white mt-4">Apply On Section</h2>
    <h4 className="text-left text-sm md:text-base mt-4">
      Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.
    </h4>
    <img src={img11} alt="Section " className="mt-4 md:mt-8" />
  </div>
  <div className="bg-gray-600 flex flex-col h-auto justify-center p-4 rounded-2xl mt-4" style={{ marginTop: '100px', marginBottom:'-80px' }}>
    <h2 className="text-left text-3xl text-white mt-4">Apply On Page</h2>
    <h4 className="text-left text-sm md:text-base mt-4">
      Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.
    </h4>
    <img src={img10} alt="Page " className="mt-4 md:mt-8" />
  </div>
</Element>


        </div>
        <Element name="feature3" className="bg-customColor h-auto mt-24 flex flex-col items-center justify-center p-4">
          <h3 className="text-3xl text-white">Supported by All Popular Browsers</h3>
          <p className="mt-4 text-center text-sm md:text-base">Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
          <img src={img8} alt="Browsers " className="h-10 mt-4" />
        </Element>

        <Element name="feature3" className="bg-customColor h-auto flex flex-col items-center justify-center mt-4 p-4 sm:px-6 md:px-12 lg:px-24 xl:px-36">
  <div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl text-white text-center sm:px-4 md:px-12 lg:px-24 xl:px-36">
      An All-Round Plugin With Powerful Features
    </h2>
  </div>
  
  <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center mt-2 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36">
    Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform,
    providing you with a seamless and intuitive experience.
  </p>
</Element>


        <Element name="feature3" className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4 p-4 justify-center items-center px-32">
          <div className="bg-custom-purple h-auto flex flex-col items-center justify-center border-0 rounded-xl p-4">
            <img src={img9} alt="Light Weight" className="h-50" />
            <h1 className="text-3xl text-white mt-4">Light Weight</h1>
            <p className="text-center font-medium mt-2">Motion Art for Elementor is designed to be lightweight.</p>
          </div>
          <div className="bg-custom-purple h-auto flex flex-col items-center justify-center border-0 rounded-xl p-4">
            <img src={img6} alt="100% Responsive" className="h-50" />
            <h1 className="text-3xl text-white mt-4">100% Responsive</h1>
            <p className="text-center font-medium mt-2">Create a consistent visual experience across all devices.</p>
          </div>
          <div className="bg-custom-purple h-auto flex flex-col items-center justify-center  rounded-xl p-4 shadow-md  border-0" >
            <img src={img7} alt="User Friendly Interface" className="h-50 " />
            <h1 className="text-3xl text-white mt-4 text-left">User Friendly Interface</h1>
            <p className="text-center font-medium mt-2 text-left">Ensure a smooth experience for both applicants and administrators.</p>
          </div>
        </Element>
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
