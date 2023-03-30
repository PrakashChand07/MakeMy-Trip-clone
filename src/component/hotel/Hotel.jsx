import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Flight = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        'https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels'
      )
      .then((res) => {
        setFlight(res.data);
        flight(res.data);
      });
  }, []);

  const [flightsData, setFlight] = useState([]);
  const [data, flight] = useState([]);
  const [origins, setOrigin] = useState({
    origin: '',
    dateCheckIn: '',
    dateCheckOut: '',
    guest: '',
  });

  const dateSet = (e) => {
    const { name, value } = e.target;
    setOrigin((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  function cleanData(dataList, origins) {
    if (origins.origin !== '') {
      let fcleanDatas = dataList.filter(
        (item) =>
          item.city.toLowerCase() === origins.origin.toLowerCase() ||
          item.check_in === origins.dateCheckIn ||
          (item.check_out === origins.dateCheckOut &&
            item.guests === origins.guest)
      );
      setFlight(fcleanDatas);
    } else {
      alert('Fill city name');
    }
  }

  function isLoggedInComponent(price) {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (isLoggedIn) {
      navigate(`/checkout/${price}`);
    } else {
      navigate(`/login`);
    }
  }

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
              value={origins.origin}
              onChange={dateSet}
              name='origin'
            />
          </div>
          <div className='departure sameClass sub_date'>
            <label htmlFor='' className='direction'>
              DEPARTURE
            </label>
            <input
              type='date'
              value={origins.dateGo}
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
              value={origins.dateReturn}
              onChange={dateSet}
              name='dateReturn'
            />
          </div>
          <div className='to sameClass sub_same'>
            <label htmlFor='' className='direction'>
              GUEST
            </label>
            <input
              type='text'
              placeholder='Guests'
              value={origins.guest}
              onChange={dateSet}
              name='guest'
            />
          </div>
        </div>
      </div>
      <button
        className='flight_search'
        onClick={() => cleanData(data, origins)}
      >
        SEARCH
      </button>
      <div className='flights'>
        {flightsData.map((item, ind) => (
          <div className='flights-data' key={ind}>
            <div className='flight_from'>
              <div className='flight_details'>
                <p className='flight-name'>City</p>
                <p>{item.city}</p>
              </div>
              <div className='flight_details'>
                <p className='flight-name'>Hotel</p>
                <p>{item.hotel_name}</p>
              </div>

              <div className='flight_details'>
                <p className='flight-name'>Check In</p>
                <p>{item.check_in}</p>
              </div>
              <div className='flight_details'>
                <p className='flight-name'>Check Out</p>
                <p>{item.check_out}</p>
              </div>
              <div className='flight_details'>
                <p className='flight-name'>Room</p>
                <p>{item.room_type}</p>
              </div>
              <div className='flight_details'>
                <p className='flight-name'>Guest</p>
                <p>{item.guests}</p>
              </div>
              <div className='flight_details'>
                <p className='flight-name'>Price per night</p>
                <p>{item.price_per_night} Rs</p>
              </div>
              <div className='flight_details'>
                <p className='flight-name'>Rating</p>
                <p>{item.rating}</p>
              </div>
              <div>
                <Button
                  variant='contained'
                  onClick={() => isLoggedInComponent(item.price_per_night)}
                >
                  BOOK
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Flight;
