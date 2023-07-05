import React, { useState } from 'react';
import './Flight2.css';
import { useNavigate } from 'react-router-dom';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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
      <div>
          <input type="radio" id="" name="way" value="way" />
          <label for="">One Way</label>
          <input type="radio" id="" name="way" value="way" />
          <label for="">Round trip</label>
          <input type="radio" id="" name="way" value="way" />
          <label for="">Multi City</label>
        </div>
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
        <div className="radioBottom">
          <div>
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label for="javascript">Regular</label>

            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label for="javascript">Armed Force</label>

            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label for="javascript">Student</label>

            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label for="javascript">Senior Citizen</label>

            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label for="javascript">Doctors & Nurses</label>
          </div>
          <div className="trending_search">
            <span>Trending Searches: </span>
            <span className="trendCity">
              Bengaluru
              <ArrowRightAltIcon
                style={{ margin: "-6px 0px", color: "#04c5ec" }}
              />
              Singapore
            </span>
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
