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
        "https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains"
      )
      .then((res) => {
        setTrain(res.data);
        train(res.data);
      });
  }, []);

  const [trainsData, setTrain] = useState([]);
  const [data, train] = useState([]);
  const [origins, setOrigin] = useState({
    origin: "",
    departure: "",
    dateGo: "",
    class: "",
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
      let cleanDatas = dataList.filter(
        (item) =>
          item.from.toLowerCase() === origins.origin.toLowerCase() ||
          item.departure.departureDate === origins.dateGo
      );
      setTrain(cleanDatas);
    } else if (
      (origins.origin !== "" && origins.departure !== "") ||
      origins.dateGo !== ""
    ) {
      let cleanDatas = dataList.filter(
        (item) =>
          (item.from.toLowerCase() === origins.origin.toLowerCase() &&
            item.to.toLowerCase() === origins.departure.toLowerCase()) ||
          item.departure.departureDate === origins.dateGo
      );
      setTrain(cleanDatas);
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
          <label for="">BOOK TRAIN TICKETS</label>
          <input type="radio" id="" name="way" value="way" />
          <label for="">CHECK PNR STATUS</label>
          <input type="radio" id="" name="way" value="way" />
          <label for="">LIVE TRAIN STATUS</label>
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

          <div className="to sameClass sub_same">
            <label htmlFor="" className="direction">
              CLASS
            </label>
            <input
              type="text"
              placeholder="Class"
              value={origins.class}
              onChange={dateSet}
              name="class"
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
        </div>
        <div>
          <img
            src={require("../assets/offer.jpg")}
            style={{ height: "50px", width: "80px" }}
          />
          <h3 className="offerShow"> New User 50% OFF</h3>
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
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <img
                src={require("../assets/train.jpg")}
                style={{ height: "170px", width: "450px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  TRIP GRARANTEE ON TRAINS!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Make your train travel easier, penalty free and worry-free
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 300, marginTop: 3 }}>
            <CardActionArea>
              <img
                src={require("../assets/train2.webp")}
                style={{ height: "170px", width: "450px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  FREE CANCELLATION ON TRAIN BOOKING!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Waitlisted tickets no more. Get a confirmed ticket or a free
                  upgrade to flights, cabs & more.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          {trainsData.map((train, ind) => (
            <div className="flight-card" key={ind}>
              <div className="flight-card-header">
                <div className="flight-name">Train-No.{train.train_number}</div>
                <div className="flight-time">
                  {train.departure.departureDate}
                </div>
                <div className="flight-duration">{train.duration}</div>
              </div>
              <div className="flight-card-body">
                <div>{train.departure.departureTime}</div>
                <div className="flight-from-to">
                  {train.from} → {train.to}
                </div>
                <div>{train.kilometers} Km</div>
              </div>
              <div className="flight-card-footer">
                <div className="flight-price">₹{train.price}</div>
                <Button
                  variant="contained"
                  onClick={() => isLoggedInComponent(train.price)}
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
