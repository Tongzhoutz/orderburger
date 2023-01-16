import classes from './Cart.module.scss';
import iconImg from '../../assets/bag.png';
import { Button  } from 'antd-mobile';
import cartContext from '../../store/cart-context';
import { useContext, useState, useEffect } from 'react';
import CartDetail from './CartDetail/CartDetail';
import Checkout from './Checkout/Checkout';

const Cart = () => {

  const cartCTX = useContext(cartContext);
  const isDisabled = cartCTX.totalAmount === 0 ? true : false;
  const [showDetails, setShowDetails] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    if (isDisabled) {
      setShowDetails(false);
      setShowCheckout(false);
    }
  })

  const toggleDetailsHandler = () => {
    if (isDisabled)  {
      setShowDetails(false);
      return;
    } 
    setShowDetails(preState => !preState);
  }

  const checkoutHandler = (e) => {
    setShowCheckout(true);
  }

  const closeHandler = () => {
    setShowCheckout(false);
  }

  return (
    <div onClick={toggleDetailsHandler} className={classes.cart}>
      {showCheckout && <Checkout onClose={closeHandler}/>}
      {showDetails && <CartDetail/> }
       <div  className={classes.icon}>
        <img src={iconImg} alt="" />
        {isDisabled ? null : 
          <span className={classes.amount}>
            {cartCTX.totalAmount}
          </span>
         }
       </div> 

      {isDisabled ? 
       <div className={classes.noItem}>No Item Selected</div> 
       :
       <div className={classes.totalPrice}>{cartCTX.totalPrice}</div>
      }
       <Button onClick={checkoutHandler} block disabled={isDisabled} shape='rounded' className={classes.btn}>Pay</Button>
       
    </div>
)}

export default Cart;

