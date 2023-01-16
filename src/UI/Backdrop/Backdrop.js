import ReactDom from 'react-dom';
import classes from './Backdrop.module.scss';

const backdropRoot = document.getElementById('backdrop-root');

const Backdrop = (props) => {
  return (
    ReactDom.createPortal(
      <div {...props} className={`${classes.backdrop} ${props.className}`} >
        {props.children}
      </div>, backdropRoot)
  )
}

export default Backdrop;
