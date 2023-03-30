import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Flight = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        'https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights'
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

  function cleanData(dataList, origins) {
    if (origins.origin !== '' && origins.departure === '') {
      let fcleanDatas = dataList.filter(
        (item) =>
          item.from.toLowerCase() === origins.origin.toLowerCase() ||
          item.departure.departureDate === origins.dateGo ||
          item.return.returneDate === origins.dateReturn
      );
      setFlight(fcleanDatas);
    } else if (
      (origins.origin !== '' && origins.departure !== '') ||
      origins.dateGo !== ''
    ) {
      let fcleanDatas = dataList.filter(
        (item) =>
          (item.from.toLowerCase() === origins.origin.toLowerCase() &&
            item.to.toLowerCase() === origins.departure.toLowerCase()) ||
          item.departure.departureDate === origins.dateGo ||
          item.return.returneDate === origins.dateReturn
      );
      setFlight(fcleanDatas);
    } else {
      alert('Fill full Information');
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
          <div className='to sameClass sub_same'>
            <span className='direction'>TO</span>
            <input
              type='text'
              placeholder='Departure city'
              value={origins.departure}
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
                <p className='flight-name'>Airline Name</p>
                <p>{item.airlineName}</p>
              </div>
              <div className='flight_details'>
                <p className='flight-name'>Origin city</p>
                <p>{item.from}</p>
              </div>
              <div className='flight_details'>
                <p className='flight-name'>Destination city</p>
                <p>{item.to}</p>
              </div>
              <div className='flight_details'>
                <p className='flight-name'>Departure Date</p>
                <p>{item.departure.departureDate}</p>
                <p>{item.departure.departureTime}</p>
              </div>
              <div className='flight_details'>
                <p className='flight-name'>Return Date</p>
                <p>{item.return.returnDate}</p>
                <p>{item.return.returnTime}</p>
              </div>
              <div className='flight_details'>
                <p className='flight-name'>Price</p>
                <p>{item.price} Rs</p>
              </div>
              <div className='flight_details'>
                <p className='flight-name'>Via</p>
                <p>{item.via}</p>
              </div>
              <div>
                <Button
                  variant='contained'
                  onClick={() => isLoggedInComponent(item.price)}
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
