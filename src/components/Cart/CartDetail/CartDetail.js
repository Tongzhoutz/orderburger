
import React, { useContext, useState } from 'react'
import Backdrop from '../../../UI/Backdrop/Backdrop'
import classes from './CartDetail.module.scss';
import { DeleteOutline } from 'antd-mobile-icons';
import cartContext from '../../../store/cart-context';
import Meal from '../../Meals/Meal/Meal';
import Confirm from '../../../UI/Confirm/Confirm';

const CartDetail = () => {
  const cartCTX = useContext(cartContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const deleteHandler = () => {
    setShowConfirm(true);
  }
  const cancelHandler = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  }

  const OKhandler = (e) => {
    cartCTX.clearCart();
  }
  return (
    <Backdrop onClick={cancelHandler}>
      {showConfirm && <Confirm confirmText={'Are your sure to clear your cart?'} onCancel={cancelHandler} onOK={OKhandler}/>}
      <div className = {classes.cartDetail} onClick={e => e.stopPropagation()}>
        <header>
          <h4>Food Details</h4>
          <div className={classes.delete}>
            <DeleteOutline onClick={deleteHandler} fontSize={18} />
            <span>clear all items</span>
          </div>
        </header>
        
        <div className={classes.foodList}> 
          {
           cartCTX.items.map(item =>
             <Meal noDesc key={item.id} meal={item} />)
          }
        </div>
      </div>
    </Backdrop>
  )
}

export default CartDetail
