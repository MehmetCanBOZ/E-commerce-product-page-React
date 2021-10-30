import React, {useState} from 'react';
import mobileMenuIcon from '../../assets/img/svg/icon-menu.svg'
import chartIcon from '../../assets/img/svg/icon-cart.svg'
import imageAvatar from '../../assets/img/image-avatar.png'
import closeIcon from '../../assets/img/svg/icon-close.svg'
import prodcutNail1 from '../../assets/img/image-product-1-thumbnail.jpg'
import deleteIcon from '../../assets/img/svg/icon-delete.svg'
import './Header.scss'
import { CartContex, useContext } from 'context/useCartContext';
import { ThemeContext } from 'context/useThemeContext';

const Header = () => {
  const [sideBarIsOpen,setSideBarIsOpen] = useState(false);
  const [chartIsOpen,setchartIsOpen] = useState(false);
  const {itemNumber,setItemNumber} = useContext(CartContex);
  
  return (
    <header>
      <div className="menu">
          <div className="header-item">
            <img className="menu-icon" src={mobileMenuIcon} alt="menu-icon" onClick={() => setSideBarIsOpen(true)}/>
            <h2 className="title">sneakers</h2>
            <div className={`sideBar ${sideBarIsOpen ?  "show" : "hidden" }` }>
              <img className="close-icon" src={closeIcon} alt="close" onClick={() => setSideBarIsOpen(false)}/>
              <div className="menuItems">
                <div>
                  <p className="menuItem" >Collection</p>
                </div>
                <div>
                  <p className="menuItem">Men</p>
                </div>
                <div>
                  <p className="menuItem">Women</p>
                </div>
                <div>
                  <p className="menuItem">About</p>
                </div>
                <div>
                  <p className="menuItem">Contact</p>
                </div>
              </div>
            </div>
          </div>
          <div className="header-item">
            <div className="cart-wrapper" onClick={() => setchartIsOpen(!chartIsOpen)} >
              {itemNumber > 0 ? <p>{itemNumber}</p> : null} 
              <img className="chart" src={chartIcon} />
            </div>
            <img className="avatar" src={imageAvatar} />
          </div>
        </div>
        <div className={chartIsOpen ? "basket-wrapper" : "hidden"}>
            <p className="basket-title">Cart</p>
            {itemNumber > 0 ? <div className="cart-item">
                    <div className="cart-item-wrapper">
                      <img className="cart-item-img" src={prodcutNail1} alt="cart-item"/>
                      <div className="cart-item-container">
                        <div>
                          <p>Automn Limited Edition...</p>
                        </div>
                        <p>$125.00 x {itemNumber} <span>${(itemNumber*125)}</span></p>
                      </div>
                      <img src={deleteIcon} alt="delete-icon" onClick={() => setItemNumber(itemNumber - 1)}/>
                    </div>
                    <button>Checkout</button>
                 </div> : 
                    <div className="product">
                    <p>Your Cart is empty.</p>
                  </div>
            }
        </div>
    </header>
  )
}

export default Header
