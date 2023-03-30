import React from 'react';
import './Homepage.css';
import { NavLink, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Flight2 from '../flight/Flight2';

const HomePage = () => {
  const { name, value } = useParams();
  return (
    <>
      <div className='container'>
        <Flight2 />
      </div>
      <div className='topLocation'>
        <h1 className='heading_Location'>Handpicked Collections for You</h1>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 5,
            },
            1500: {
              slidesPerView: 6,
            },
            1700: {
              slidesPerView: 7,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image1.jpg')} />
              <div>
                <p className='TextImg'>
                  Stays in & Around Delhi for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image2.jpg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Mumbai for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image3.jpeg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Bangalore for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image4.jpg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Punjab for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image5.jpeg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around West Bangal for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image6.png')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Manali for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image7.jpeg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Goa for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image8.jpg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Shimla for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image9.jpg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Sikkim for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image1.jpg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Bhopal for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='topLocation'>
        <h1 className='heading_Location'>
          Unlock Lesser-Known Wonders of India
        </h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={6}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 5,
            },
            1500: {
              slidesPerView: 6,
            },
            1700: {
              slidesPerView: 7,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image9.jpg')} />
              <div>
                <p className='TextImg'>
                  Stays in & Around Delhi for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image8.jpg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Mumbai for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image7.jpeg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Bangalore for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image6.png')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Punjab for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image5.jpeg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around West Bangal for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image4.jpg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Manali for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image3.jpeg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Goa for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image2.jpg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Shimla for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image1.jpg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Sikkim for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide>
            <NavLink>
              <img src={require('../assets/image9.jpg')} />
              <div>
                <p className='TextImg'>
                  Stay in & around Bhopal for a Weekend Getaway
                </p>
              </div>
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='Information'>
        <div className='info_tab'>
          <p className='info_sub_heading'>Why MakeMyTrip?</p>
          <p className='info_sub'>
            Established in 2000, MakeMyTrip has since positioned itself as one
            of the leading companies, providing great offers, competitive
            airfares, exclusive discounts, and a seamless online booking
            experience to many of its customers. The experience of booking your
            flight tickets, hotel stay, and holiday package through our desktop
            site or mobile app can be done with complete ease and no hassles at
            all. We also deliver amazing offers, such as Instant Discounts, Fare
            Calendar, MyRewardsProgram, MyWallet, and many more while updating
            them from time to time to better suit our customers’ evolving needs
            and demands.
          </p>
        </div>
        <div className='info_tab'>
          <p className='info_sub_heading'>Booking Flights with MakeMyTrip</p>
          <p className='info_sub'>
            At MakeMyTrip, you can find the best of deals and cheap air tickets
            to any place you want by booking your tickets on our website or app.
            Being India’s leading website for hotel, flight, and holiday
            bookings, MakeMyTrip helps you book flight tickets that are
            affordable and customized to your convenience. With customer
            satisfaction being our ultimate goal, we also have a 24/7 dedicated
            helpline to cater to our customer’s queries and concerns. Serving
            over 5 million happy customers, we at MakeMyTrip are glad to fulfill
            the dreams of folks who need a quick and easy means to find air
            tickets. You can get a hold of the cheapest flight of your choice
            today while also enjoying the other available options for your
            travel needs with us.
          </p>
        </div>
        <div className='info_tab'>
          <p className='info_sub_heading lastHeading'>
            Domestic Flights with MakeMyTrip
          </p>
          <p className='info_sub'>
            MakeMyTrip is India's leading player for flight bookings. With the
            cheapest fare guarantee, experience great value at the lowest price.
            Instant notifications ensure current flight status, instant fare
            drops, amazing discounts, instant refunds and rebook options, price
            comparisons and many more interesting features.
          </p>
        </div>
      </div>
      <footer>
        <div className='footerBottom'>
          <div className='icon'>
            <a href='https://twitter.com/makemytrip/' className='twitterIcon'>
              <TwitterIcon />
            </a>
            <a
              href='https://www.facebook.com/makemytrip/'
              className='facebookIcon'
            >
              <FacebookIcon />
            </a>
          </div>

          <div className='text_bottom'>
            <div>
              <p>© 2023 MAKEMYTRIP PVT. LTD.</p>
            </div>
            <pre> Country INDIA USA UAE</pre>
          </div>
        </div>
      </footer>
      <NavLink></NavLink>
    </>
  );
};
export default HomePage;
