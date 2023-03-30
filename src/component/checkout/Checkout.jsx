import { useState, React } from 'react';
import './Checkout.css';
import { Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const navigate = useNavigate();
  const { price, value, name } = useParams();
  const [data, setData] = useState({
    cardName: '',
    cardNumber: '',
    cardExpire: '',
    cardCvv: '',
  });
  const detailsCard = (e) => {
    const { name, value } = e.target;
    setData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };
  const registerData = () => {
    const { cardName, cardNumber, cardExpire, cardCvv } = data;
    if (
      cardName !== '' &&
      cardNumber !== '' &&
      cardExpire !== '' &&
      cardCvv !== ''
    ) {
      navigate(`/paymentsuccess`);
    } else {
      alert('fill full details');
    }
  };
  return (
    <>
      <div className='totalCharge'>
        <div className='showFair'>
          <h2>Base Summary</h2>
          <div className='fare'>
            <p>Base Fair</p>
            <p>{price} Rs</p>
          </div>
          <hr />
          <div className='fare'>
            <p>Sub Charge</p>
            <p>500 Rs</p>
          </div>
          <hr />
          <div className='fare'>
            <p>Total fare</p>
            <p>{500 + Number(price)} Rs</p>
          </div>
        </div>

        <div className='showFair'>
          <h2>Payment Method</h2>
          <div className='fare'>
            <input
              type='text'
              placeholder='Enter Card name'
              value={data.cardName}
              onChange={detailsCard}
              name='cardName'
            />
          </div>
          <div className='fare'>
            <input
              type='number'
              placeholder='Enter Card Number'
              value={data.cardNumber}
              onChange={detailsCard}
              name='cardNumber'
            />
          </div>
          <div className='fare'>
            <input
              type='text'
              placeholder='Enter Expire Date'
              value={data.cardExpire}
              onChange={detailsCard}
              name='cardExpire'
            />
          </div>
          <div className='fare'>
            <input
              type='number'
              placeholder='Enter CVV'
              value={data.cardCvv}
              onChange={detailsCard}
              name='cardCvv'
            />
          </div>
          <div className='fare'>
            <Button variant='contained' onClick={registerData}>
              Payment
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
