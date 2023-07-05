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
      <div className='topLocaton_main'>
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
      </div>
  <div className='bottomInfo'>

<p className='bottomHeadline'>PRODUCT OFFERING</p>

<p className='bottomDetails'>Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab.</p>

<p className='bottomHeadline'>MAKEMYTRIP</p>

<p className='bottomDetails'>About Us, Investor Relations, Careers, MMT Foundation, CSR Policy, myPartner - Travel Agent Portal, Foreign Exchange, List your hotel, Partners- Redbus, Partners- Goibibo, Advertise with Us, RedBus Ferry Malaysia, RedBus Ferry Singapore</p>

<p className='bottomHeadline'>ABOUT THE SITE</p>

<p className='bottomDetails'>Customer Support, Payment Security, Privacy Policy, User Agreement, Terms of Service, More Offices, Make A Payment, Work From Home, Report Security Issues</p>

<p className='bottomHeadline'>TOP HOTELS IN INDIA</p>

<p className='bottomDetails'>Fairmont Jaipur, St Regis Goa, Six Senses Fort Barwara, W Goa, Grand Hyatt Goa, Shangri-La Bangalore, The St Regis Mumbai, Taj Rishikesh, Grand Hyatt Mumbai, Le Meridien Delhi, Rambagh Palace Jaipur, Leela Palace Chennai, The Leela Palace Udaipur, Taj Lake Palace Udaipur, Jw Marriott Chandigarh, Alila Diwa Goa, Le Meridien Goa, Taj Lands End Mumbai, Itc Grand Chola Chennai, Itc Maratha Mumbai, Oberoi Udaivilas, Jai Mahal Palace Jaipur, Taj Mahal Tower Mumbai, Marriott Suites Pune, Park Hyatt Chennai, The Leela Palace Jaipur, Jw Marriott Mumbai Sahar, Jw Marriott Mumbai Juhu, The Ritz Carlton Bengaluru, The Oberoi New Delhi, Taj Resort & Convention Centre Goa, Taj Bengal Kolkata, Taj Coromandel Chennai, The Oberoi Gurgaon, The Westin Goa, Jw Marriott Hotel Pune, The Leela Palace New Delhi, Taj West End Bengaluru, The Taj Mahal Palace Mumbai</p>

<p className='bottomHeadline'>TOP INTERNATIONAL HOTELS</p>

<p className='bottomDetails'>Adaaran Club Rannalhi, Marina Bay Sands Singapore, Coco Bodu Hithi, Taj Dubai, Atlantis Hotel Dubai, Amari Phuket, Jw Marriott Dubai, Armani Hotel Dubai, Grand Hyatt Dubai, Saii Lagoon Maldives, Gevora Hotel Dubai, Hyatt Regency Dubai, Pan Pacific Singapore, The Palm Dubai, Caesars Palace, Baiyoke Sky Hotel, Centara Pattaya Hotel, Embudu Village, Orchard Hotel Singapore, Reethi Beach Resort, Ambassador Hotel Bangkok, Dusit Thani Pattaya, Shangri La Singapore, Sunbeam Hotel Pattaya, Taj Samudra Colombo, Bangkok Palace Hotel, Hilton Pattaya, Novotel Phuket Resort, Taj Exotica Resort Maldives, Village Hotel Bugis, Avani Atrium Bangkok, The Plaza New York, Village Hotel Albert Court, Amari Pattaya</p>

<p className='bottomHeadline'>QUICK LINKS</p>

<p className='bottomDetails'>Delhi Chennai Flights, Delhi Mumbai Flights, Delhi Goa Flights, Chennai Mumbai flights, Mumbai Hyderabad flights, Kolkata to Rupsi Flights, Rupsi to Guwahati Flights, Pasighat to Guwahati Flights, Delhi to Khajuraho Flights, Cochin to Agatti Island Flights, Hotels in Delhi, Hotels in Mumbai, Hotels In Goa, Hotels In Jaipur, Hotels In Ooty, Hotels In Udaipur, Hotels in Puri, Hotels In North Goa, Hotels In Rishikesh, Honeymoon Packages, Kerala Packages, Kashmir Packages, Ladakh Packages, Goa Packages, Thailand Packages, Sri Lanka Visa, Thailand Visa, Explore Goa, Explore Manali, Explore Shimla, Explore Jaipur, Explore Srinagar</p>

<p className='bottomHeadline'>IMPORTANT LINKS</p>

<p className='bottomDetails'>Cheap Flights, Flight Status, Kumbh Mela, Domestic Airlines, International Airlines, Indigo, Spicejet, GoAir, Air Asia, Air India, Indian Railways, Trip Ideas, Beaches, Honeymoon Destinations, Romantic Destinations, Popular Destinations, Resorts In Udaipur, Resorts In Munnar, Villas In Lonavala, Hotels in Thailand, Villas In Goa, Domestic Flight Offers, International Flight Offers, UAE Flight Offers, USA, UAE, Saudi Arabia, UK, Oman</p>

<p className='bottomHeadline'>CORPORATE TRAVEL</p>

<p className='bottomDetails'>Corporate Travel, Corporate Hotel Booking, Corporate Flight Booking, Business Travel for SME, GST Invoice for International flights, Business Travel Solutions, GST Invoice for Bus, Corporate Bus booking, myBiz - Best Business Travel Platform, GST Invoice for Flights, GST Invoice for Corporate Travel, GST Invoice for Hotels, myBiz for Small Business, Free cancellation on International Flights</p>

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
    </>
  );
};
export default HomePage;
