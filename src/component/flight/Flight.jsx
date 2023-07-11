import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
const Flight = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
      )
      .then((res) => {
        setFlight(res.data);
        flight(res.data);
      });
  }, []);
  const [flightsData, setFlight] = useState([]);
  const [data, flight] = useState([]);
  const [origins, setOrigin] = useState({
    origin: "",
    departure: "",
    dateGo: "",
    dateReturn: "",
  });

  const dateSet = (e) => {
    const { name, value } = e.target;
    setOrigin((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  function cleanData(dataList, origins) {
    if (origins.origin !== "" && origins.departure === "") {
      let fcleanDatas = dataList.filter(
        (item) =>
          item.from.toLowerCase() === origins.origin.toLowerCase() ||
          item.departure.departureDate === origins.dateGo ||
          item.return.returneDate === origins.dateReturn
      );
      setFlight(fcleanDatas);
    } else if (
      (origins.origin !== "" && origins.departure !== "") ||
      origins.dateGo !== ""
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
      alert("Fill full Information");
    }
  }
  function isLoggedInComponent(price) {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (isLoggedIn) {
      navigate(`/checkout/${price}`);
    } else {
      navigate(`/login`);
    }
  }
  return (
    <>
      <div className="flight_container">
        <div>
          <input type="radio" id="" name="way" value="way" />
          <label for="">One Way</label>
          <input type="radio" id="" name="way" value="way" />
          <label for="">Round trip</label>
          <input type="radio" id="" name="way" value="way" />
          <label for="">Multi City</label>
        </div>
        <div className="search_details">
          <div className="form sameClass sub_same">
            <span className="direction">FROM</span>
            <input
              className="inputItem"
              type="text"
              placeholder="Origin city"
              value={origins.origin}
              onChange={dateSet}
              name="origin"
            />
          </div>
          <div className="to sameClass sub_same">
            <span className="direction">TO</span>
            <input
              type="text"
              placeholder="Departure city"
              value={origins.departure}
              onChange={dateSet}
              name="departure"
            />
          </div>
          <div className="departure sameClass sub_date">
            <label htmlFor="" className="direction">
              DEPARTURE
            </label>
            <input
              type="date"
              value={origins.dateGo}
              onChange={dateSet}
              name="dateGo"
            />
          </div>
          <div className="return sameClass sub_date">
            <label htmlFor="" className="direction">
              RETURN
            </label>
            <input
              type="date"
              value={origins.dateReturn}
              onChange={dateSet}
              name="dateReturn"
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
      <button
        className="flight_search"
        onClick={() => cleanData(data, origins)}
      >
        SEARCH
      </button>
      <div className="flights">
        <div className="filter_flights">
          <div>
            <h2 className="filterHeading">Popular Filters</h2>
            <div >
              <Checkbox />
              <span>Non Stop(33)</span>
              <span className="priceShow">Rs 7,234</span>
            </div>
            <div >
              <Checkbox />
              <span>Prenoon Departure(24)</span>
              <span className="priceShow">Rs $7,234</span>
            </div>
            <div >
              <Checkbox />
              <span> IndiGo(31) </span>
              <span className="priceShow">Rs $7,234</span>
            </div>
            <div >
              <Checkbox />
              <span>Vistara(9) </span>
              <span className="priceShow">Rs $7,234</span>
            </div>
          </div>

          <div>
            <h2 className="filterHeading">One Way</h2>
            <Slider defaultValue={70} />
            <div className="fightPriceFilter">
              <p>RS 1000</p>
              <p>RS 5000</p>
            </div>
          </div>

          <div>
            <h2 className="filterHeading">Air Lines</h2>
            <div >
              <Checkbox />
              <span>Air India(33)</span>
              <span className="priceShow">Rs 7,234</span>
            </div>
            <div >
              <Checkbox/>
              <span>AirAsia(24)</span>
              <span className="priceShow">Rs $7,234</span>
            </div>
            <div >
              <Checkbox />
              <span> AirAkash(17) </span>
              <span className="priceShow">Rs $7,234</span>
            </div>
            <div >
              <Checkbox />
              <span>Vistara(12) </span>
              <span className="priceShow">Rs $7,234</span>
            </div>
            <div >
               <Checkbox />
            <span> Spicejet(5) </span>
            <span className="priceShow">Rs $7,234</span>
            </div>
           
             <div >
            <Checkbox />
            <span>StarAir(9) </span>
            <span className="priceShow">Rs $7,234</span>
          </div>
          </div>

         
        </div>
        <div>
        {flightsData.map((ticket, ind) => (
                    <div className="flight-card" key={ind}>
                    <div className="flight-card-header">
                      <div className="flight-name">{ticket.airlineName}</div>
                      <div className="flight-time">
                        {ticket.departure.departureDate} - {ticket.return.returnDate}
                      </div>
                      <div className="flight-duration">{ticket.duration}</div>
                    </div>
                    <div className="flight-card-body">
                      <div>{ticket.departure.departureTime}</div>
                      <div className="flight-from-to">
                        {ticket.from} → {ticket.to}
                      </div>
                      <div>{ticket.return.returnTime}</div>
                    </div>
                    <div className="flight-card-footer">
                      <div className="flight-price">₹{ticket.price}</div>
                      <Button
                  variant="contained"
                  className="book-now-button"
                  onClick={() => isLoggedInComponent(ticket.price)}
                >
                  Book Now
                </Button>
                    </div>
                  </div>
        ))}
<div>no more result...!!</div>
        </div>
        
      </div>
    </>
  );
};
export default Flight;
