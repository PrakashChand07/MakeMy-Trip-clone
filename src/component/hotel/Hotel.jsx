import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const Flight = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels"
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
    dateCheckIn: "",
    dateCheckOut: "",
    guest: "",
  });

  const dateSet = (e) => {
    const { name, value } = e.target;
    setOrigin((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  function cleanData(dataList, origins) {
    if (origins.origin !== "") {
      let fcleanDatas = dataList.filter(
        (item) =>
          item.city.toLowerCase() === origins.origin.toLowerCase() ||
          item.check_in === origins.dateCheckIn ||
          (item.check_out === origins.dateCheckOut &&
            item.guests === origins.guest)
      );
      setFlight(fcleanDatas);
    } else {
      alert("Fill city name");
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
          <div className="to sameClass sub_same">
            <label htmlFor="" className="direction">
              GUEST
            </label>
            <input
              type="text"
              placeholder="Guests"
              value={origins.guest}
              onChange={dateSet}
              name="guest"
            />
          </div>
        </div>
        <div>
          <img
            src={require("../assets/offer.jpg")}
            style={{ height: "70px", width: "100px" }}
          />
          <h3>Exculsive Offer on Delhi Hotel 50% OFF</h3>
        </div>
      </div>
      <button
        className="flight_search"
        onClick={() => cleanData(data, origins)}
      >
        SEARCH
      </button>
      <div className="flights">
        <div className="hotelDiscount filter_flights">
          <div>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <img
                  src={require("../assets/image2.jpg")}
                  style={{ height: "170px", width: "450px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    GOA STAR HOTEL
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This 4 Star Hotel in Delhi is located in Mahipalpur Full
                    Address of property is L 75, Gali no. 7, Near IGI Airport
                    This Hotel have 4.0 Out of 5 Rating where
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 300, marginTop: 3 }}>
              <CardActionArea>
                <img
                  src={require("../assets/hotelPage1.jpg")}
                  style={{ height: "170px", width: "450px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    THE GRAND INN
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This 4 Star Hotel in Delhi is located in Mahipalpur Full
                    Address of property is 2206 Rajguru Road Paharganj New Delhi
                    10 Mins Walk From New Delhi Railway Station 12 mins Walk
                    from RK Metro
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
        <div>
          {flightsData.map((hotel, ind) => (
            <div className="flight-card" key={ind}>
              <div className="flight-card-header">
                <div className="flight-name">{hotel.hotel_name}</div>
                <div className="flight-time">
                  {hotel.check_in} | {hotel.check_out}
                </div>
                <div className="flight-duration">Room: {hotel.room_type}</div>
              </div>
              <div className="flight-card-body">
                <div>Ratings: {hotel.rating}</div>
                <div className="flight-from-to">{hotel.city}</div>
                <div>Guests: {hotel.guests}</div>
              </div>
              <div className="flight-card-footer">
                <div className="flight-price">₹{hotel.price_per_night}</div>
                <Button
                  variant="contained"
                  onClick={() => isLoggedInComponent(hotel.price_per_night)}
                >
                  BOOK
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
