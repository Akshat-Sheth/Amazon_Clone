import React from 'react';
import './Payment.css'
import PaymentProduct from './Paymentproduct';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Payment = () => {

    const {basket} = useSelector((state)=>state.basket)
    let sum = 0

  const total = () => {
    basket.map((product) => {
      sum = sum + product.price
    })
    return sum
  }

  const price = total()

  return (
    <div className='payment'>
        <div className="payment_container">
            <h1>Checkout (2 items)</h1>
            <div className="section">
                <div className="title1">
                    Delievery Address 
                </div>
                <div className="address">
                    <p>A - Pramukh Garden  </p>
                    <p>Amli Road, Silvassa</p>
                </div>
            </div>

            <div className="section">
                <div className="title1">
                    Review Items
                </div>
                <div className="items">
                {basket.map((product) => (
                <div>
                <PaymentProduct  title={product.title} price = {product.price} rating={product.rating} image = {product.image} key={product._id}  />
                </div>
              ))}
                </div>
            </div>

            <div className="section">
            <div className='to_pay'>To Pay : <strong>${price}</strong></div>
                <div className="title1">
                    Payment method
                </div>
                <div className="methods">
                    <form> 
                        <div><input type="radio" name="pay" id="pay" /> Cash on Delievery</div>
                        <div><input type="radio" name="pay" id="pay" /> Credit / Debit Card</div>
                        <div><input type="radio" name="pay" id="pay" /> Google Pay / Paytm</div>
                    </form>
                    <Link to='status'>
                    <button className='btn'>PURCHASE</button>
                    </Link>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Payment;
