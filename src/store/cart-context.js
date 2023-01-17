import React from 'react'

const cartContext = React.createContext({
  items:[],
  totalAmount: 0,
  totalPrice: 0,
  cartDispatch: () => {}
});

export default cartContext;
