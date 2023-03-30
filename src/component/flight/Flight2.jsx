import React, { useState } from 'react';
import './Flight2.css';
import { useNavigate } from 'react-router-dom';

const Flight2 = () => {
  const navigate = useNavigate();
  const [fixedOrigin, setOrigin] = useState({
    origin: '',
    departure: '',
    dateGo: '',
    dateReturn: '',
  });
  const dateSet = (e) => {
    const { name, value } = e.target;
    setOrigin((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
  return (
    <>
      <div className='flight_container'>
        <div className='search_details'>
          <div className='form sameClass sub_same'>
            <span className='direction'>FROM</span>
            <input
              className='inputItem'
              type='text'
              placeholder='Origin city'
              value={fixedOrigin.origin}
              onChange={dateSet}
              name='origin'
            />
          </div>
          <div className='to sameClass sub_same'>
            <span className='direction'>TO</span>
            <input
              type='text'
              placeholder='Departure city'
              value={fixedOrigin.departure}
              onChange={dateSet}
              name='departure'
            />
          </div>
          <div className='departure sameClass sub_date'>
            <label htmlFor='' className='direction'>
              DEPARTURE
            </label>
            <input
              type='date'
              value={fixedOrigin.dateGo}
              onChange={dateSet}
              name='dateGo'
            />
          </div>
          <div className='return sameClass sub_date'>
            <label htmlFor='' className='direction'>
              RETURN
            </label>
            <input
              type='date'
              value={fixedOrigin.dateReturn}
              onChange={dateSet}
              name='dateReturn'
            />
          </div>
        </div>
      </div>
      <button className='flight_search' onClick={() => navigate(`/flight`)}>
        SEARCH
      </button>
      ;
    </>
  );
};
export default Flight2;
