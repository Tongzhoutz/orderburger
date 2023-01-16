import React from 'react'
import Backdrop from '../Backdrop/Backdrop';
import { Button } from 'antd-mobile';
import classes from './Confirm.module.scss';

const Confirm = (props) => {
  const onCancel = (e) => {
    props.onCancel(e);
  }
  const onOK = (e) => {
    props.onOK(e);
  }
  return (
    <Backdrop className={classes.outer}>
      <div className={classes.confirm}>
        <p>{props.confirmText}</p>
        <div>
          <Button onClick={onCancel} shape='rounded' className={classes.cancelBtn}>Cancel</Button>
          
          <Button onClick={onOK} shape='rounded' className={classes.yesBtn}>Yes</Button>
        </div>
      </div>

    </Backdrop>
  )}

export default Confirm;