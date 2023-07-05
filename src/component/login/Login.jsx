import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (isLoggedIn) {
      navigate(`/`);
    }
  }, []);

  const [info, setInfo] = useState({
    email: '',
    password: '',
  });
  const userData = (e) => {
    const { name, value } = e.target;
    setInfo((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };
  const checkValidation = () => {
    const addlogin = JSON.parse(localStorage.getItem('login')) || [];
    const okCheck = addlogin.filter((element) => {
      if (
        element.email.toLowerCase() === info.email &&
        element.password.toLowerCase() === info.password
      ) {
        return element;
      }
    });
    if (okCheck.length) {
      console.log(okCheck);
      localStorage.setItem(
        'isLoggedIn',
        JSON.stringify({ name: okCheck[0].fullName, email: okCheck[0].email })
      );
      navigate(`/`);
    } else {
      console.log('no');
      alert('fill correct data');
    }
  };
  return (
    <>
      <div className='login_container'>
        <span className='logoMakeMyTrip'>
          <Link to='/'>
            <img
              src='https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png'
              alt='logo'
            />
          </Link>
        </span>
        <div className='signBox'>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            placeholder='Enter Email'
            value={info.email}
            onChange={userData}
            name='email'
            required
          />
        </div>
        <div className='signBox'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            placeholder='Enter Password'
            value={info.password}
            onChange={userData}
            name='password'
            required
          />
        </div>
        <div className='login_btn'>
          <Button
            variant='contained'
            onClick={() => {
              checkValidation();
            }}
          >
            LOG IN
          </Button>
        </div>
        <div className='newUser'>
          <Link to='/register'>New user?</Link>
        </div>
      </div>
    </>
  );
};
export default Login;
