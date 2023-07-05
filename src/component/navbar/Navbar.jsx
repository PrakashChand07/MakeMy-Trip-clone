import React from 'react';
import './Navbar.css';
import { NavLink, Link, useNavigate, Outlet } from 'react-router-dom';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import TrainIcon from '@mui/icons-material/Train';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import RowingIcon from '@mui/icons-material/Rowing';
import { Button } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import PaymentsIcon from '@mui/icons-material/Payments';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const navigate = useNavigate();
  function isLoggedInComponent() {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (isLoggedIn) {
      console.log(isLoggedIn);
      return (
        <>
          <div className='setName'>
            <div className='usename'>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>
                {isLoggedIn.name.slice(0, 1)[0].toUpperCase()}
              </Avatar>
            </div>
            <div>
              <Button
                variant='contained'
                color='success'
                onClick={(e) => {
                  localStorage.removeItem('isLoggedIn');
                  navigate(`/login`);
                }}
              >
                sign out
              </Button>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className='loginPage'>
          <Link to='/login'>
            <span className='mycreate'>my</span>
            <span className='loginText'>Login or Create Account</span>
          </Link>
        </div>
      );
    }
  }

  return (
    <>
      <div className='NavbarContainer'>
        <span className='logoTrip'>
          <NavLink to={`/`}>
            <img src={logo} alt='logo' />
          </NavLink>
        </span>
        <nav className='navList'>
          <ul>
            <li className='textIcon'>
              <NavLink to={`flight`}>
                <ConnectingAirportsIcon className='iconSize' />
                Flights
              </NavLink>
            </li>

            <li className='textIcon'>
              <NavLink to={`/hotel`}>
                <LocalHotelIcon className='iconSize' />
                Hotels
              </NavLink>
            </li>

            <li className='textIcon'>
              <NavLink to={`/train`}>
                <TrainIcon className='iconSize' />
                Trains
              </NavLink>
            </li>

            <li className='textIcon'>
              <NavLink to='xcz'>
                <DirectionsBusIcon className='iconSize' />
                Bus
              </NavLink>
            </li>

            <li className='textIcon'>
              <NavLink to='cxz'>
                <PaymentsIcon className='iconSize' />
                Forex
              </NavLink>
            </li>

            <li className='textIcon'>
              <NavLink to='xcasdz'>
                <LocalTaxiIcon className='iconSize' />
                tax
              </NavLink>
            </li>

            <li className='textIcon'>
              <NavLink to='zcz'>
                <FlightTakeoffIcon className='iconSize' />
                Charter
              </NavLink>
            </li>

            <li className='textIcon'>
              <NavLink to='xzcxz'>
                <RowingIcon className='iconSize' />
                Activity
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>{isLoggedInComponent()}</div>
      </div>
      <Outlet></Outlet>
    </>
  );
};
export default Navbar;
