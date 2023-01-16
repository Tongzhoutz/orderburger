import React, { useContext } from 'react'
import ReactDom from 'react-dom';
import { CloseOutline } from 'antd-mobile-icons';
import classes from './Checkout.module.scss';
import cartContext from '../../../store/cart-context';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import Bar from './Bar/Bar';

const checkoutRoot = document.getElementById('checkout-root');
const Checkout = (props) => {

  const ctx = useContext(cartContext);

  const clickHandler = () => {
    props.onClose();
  } 
  return (
    ReactDom.createPortal(
      <div className={classes.checkout}>
        <CloseOutline onClick={clickHandler} fontSize={18} /> 

        <div className={classes.main}>

          <header className={classes.header}>
           <h2>Food Detail</h2>
          </header>

          <div className={classes.mealList}>
            {ctx.items.map(item => <CheckoutItem key={item.id} meal={item} />)}
          </div>

          <footer className={classes.footer}>
            <p>{ctx.totalPrice}</p>
          </footer>

        </div>
        <Bar totalPrice={ctx.totalPrice} />
      </div>, 
      checkoutRoot
    )
  )
}

export default Checkout;
