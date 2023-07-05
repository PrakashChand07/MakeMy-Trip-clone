import React from 'react';
import Navbar from './component/navbar/Navbar';
import Homepage from './component/homePage/Homepage';
import Login from './component/login/Login';
import { Routes, Route } from 'react-router-dom';
import Flight from './component/flight/Flight';
import Hotel from './component/hotel/Hotel';
import Train from './component/train/Train';
import Register from './component/register/Register';
import CheckOut from './component/checkout/Checkout';
import Payment from './component/payment/PayMent ';
import Error from './component/error/Error';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Navbar />}>
          <Route index path='' element={<Homepage />}>
          </Route>
          <Route exact path='flight' element={<Flight />}></Route>
          <Route exact path='hotel' element={<Hotel />}></Route>
          <Route exact path='train' element={<Train />}></Route>
          <Route path='checkout/:price' element={<CheckOut />}></Route>
        </Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/paymentsuccess' element={<Payment />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </>
  );
};
export default App;
