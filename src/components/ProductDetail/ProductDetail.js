import React, {useState} from 'react';
import './ProductDetail.scss';
import chartIcon2 from '../../assets/img/svg/icon-cart-2.svg';
import { CartContex, useContext } from 'context/useCartContext';

const ProductDetail = () => {
  const {itemNumber,setItemNumber} = useContext(CartContex);
  const [state,setState] = useState(0);
  return (
    <div className="product-detail">
      <div>
        <h3 className="company-name">SNEAKER COMPANY</h3>
        <h3 className="product-name">Fall Limited Edition Sneakers</h3>
        <p className="product-info">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
      </div>
      <div className="price">
        <div className="price-info">
          <h3 >$125.00</h3>
          <h4 className="discount">50%</h4>
        </div>
          <h4 className="old-price">$250.00</h4>
      </div>
      <div className="detail-bottom">
        <div className="cart-container">
          <button onClick={() => setState(() => {
            if(state<=0){
              return 0
            }else{
              return state - 1;
            }
          })}>-</button>
          <p>{state}</p>
          <button onClick={() => setState(state + 1)}>+</button>
        </div>
        <button className="add-cart" onClick={() => setItemNumber(itemNumber+ state)}><img src={chartIcon2} alt="chat"/> Add to cart </button>
      </div>
    </div>
  )
}

export default ProductDetail
