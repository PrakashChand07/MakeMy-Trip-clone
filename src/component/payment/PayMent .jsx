import React from 'react';
import { Link} from 'react-router-dom';
import { Button } from '@mui/material';

const Payment = () => {
  return (
    <>
      <div className='payment'>
        <h1>payment successfully</h1>
        <div className='payment_sucess'>
          <Link to={`/`}>
            <Button variant='contained'>HOME</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Payment;
