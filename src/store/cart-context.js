import React from 'react'

const cartContext = React.createContext({
  items:[],
  totalAmount: 0,
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {}
});

export default cartContext;
