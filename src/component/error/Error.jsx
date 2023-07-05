import React from 'react';
import Navbar from '../navbar/Navbar';
import './error.css';
const Error = () => {
  return (
    <>
      <Navbar/>
      <div className='error_img'>
        <img src={require('../assets/error.webp')} style={{marginLeft:'280px'}}/>
      </div>
       
    </>
  );
};
export default Error;
