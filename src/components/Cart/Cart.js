import classes from './Cart.module.scss';
import iconImg from '../../assets/bag.png';
import { Button } from 'antd-mobile';
import cartContext from '../../store/cart-context';
import { useContext } from 'react';

const Cart = () => {

  const cartCTX = useContext(cartContext);
  const isDisabled = cartCTX.totalAmount === 0 ? true : false;

  return (
    <div className={classes.cart}>
       <div className={classes.icon}>
        <img src={iconImg} alt="" />
        <span className={classes.amount}>{cartCTX.totalAmount}</span>
       </div> 

      {isDisabled ? 
       <div className={classes.noItem}>No Item Selected</div> 
       :
       <div className={classes.totalPrice}>{cartCTX.totalPrice}</div>
      }
       <Button block disabled={isDisabled} shape='rounded' className={classes.btn}>Pay</Button>
       
    </div>
)}

export default Cart;

