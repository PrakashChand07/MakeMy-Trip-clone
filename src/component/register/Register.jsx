import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import '../login/Login.css';

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (isLoggedIn) {
      navigate(`/`);
    }
  }, []);
  const [info, setInfo] = useState({
    fullName: '',
    number: '',
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
  const addlogin = JSON.parse(localStorage.getItem('login')) || [];
  const registerData = () => {
    const { fullName, email, password, number } = info;
    if (fullName !== '' && email !== '' && password !== '' && number !== '') {
      addlogin.push({
        fullName,
        email,
        password,
      });
      localStorage.setItem('login', JSON.stringify(addlogin));
      navigate('/login');
    } else {
      alert('fill full details');
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
          <label htmlFor=''>Name</label>
          <input
            type='text'
            placeholder='Enter Full Name'
            value={info.fullName}
            onChange={userData}
            name='fullName'
          />
        </div>
        <div className='signBox'>
          <label htmlFor=''>Phone Number</label>
          <input
            type='Number'
            placeholder='Enter Number'
            value={info.number}
            onChange={userData}
            name='number'
          />
        </div>
        <div className='signBox'>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            placeholder='Enter Email'
            value={info.email}
            onChange={userData}
            name='email'
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
          />
        </div>
        <div className='login_btn'>
          <Button variant='contained' onClick={registerData}>
            SUBMIT
          </Button>
        </div>
        <div className='newUser'>
          <Link to='/login'>already user?</Link>
        </div>
      </div>
    </>
  );
};
export default Register;
