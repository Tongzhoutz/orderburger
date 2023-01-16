import './App.module.scss';
import Meals from './components/Meals/meals';
import { useState } from 'react';
import cartContext from './store/cart-context';
import SearchBar from './components/SearchBar/SearchBar';
import Cart from './components/Cart/Cart';

const MEALS_DATA = [
  {
    id: '1',
    title: 'Croissanwich Meal Small',
    desc: 'Sizzling sausage, fluffy eggs, and melted American cheese.',
    price: 6.39,
    img: '/img/meals/1.png'
  },
  {
    id: '2',
    title: 'Croissanwich Meal Small',
    desc: 'Black Forest ham, sizzling sausage, crispy bacon, fluffy eggsheese.',
    price: 20,
    img: '/img/meals/2.png'
  },
  {
    id: '3',
    title: 'Bacon, Sausage & Ham Fully Croissanwich',
    desc: 'Black Forest ham, sizzling sausage, crispy bacon, fluffy eggs',
    price: 24,
    img: '/img/meals/3.png'
  }, {
    id: '4',
    title: 'Fully Loaded Croissanwich',
    desc: 'Black Forest ham, sizzling sausage, crispy bacon, fluffy eggs',
    price: 21,
    img: '/img/meals/4.png'
  }, {
    id: '5',
    title: 'Sausage Biscuit',
    desc: 'Sizzling sausage, fluffy eggs, and melted American cheese ',
    price: 22,
    img: '/img/meals/5.png'
  }, {
    id: '6',
    title: 'Sausage Croissanwich',
    desc: 'Two sizzling sausage patties, fluffy eggs and melted American cheese',
    price: 14,
    img: '/img/meals/6.png'
  }, {
    id: '7',
    title: 'Egg-Normous Burrito',
    desc: 'Sizzling sausage, crispy bacon, fluffy eggs, melted American cheese',
    price: 12,
    img: '/img/meals/7.png'
  }
];

const App = () => {
  const [MealsData, setMealsData] = useState(MEALS_DATA);

  const [cartData, setCartData] = useState({
    items:[],
    totalAmount: 0, 
    totalPrice: 0
  });

  const keyWordHandler = (keyword) => {
    const filteredData = MEALS_DATA.filter(item => item.title.indexOf(keyword) !== -1);
    setMealsData(filteredData);
  }

  const addItem = (meal) => {

    const newCart = {...cartData};
    if (cartData.items.indexOf(meal) === -1) {
      newCart.items.push(meal);
      meal.amount = 1;
    } else {
      meal.amount += 1;
    }
    newCart.totalAmount += 1;
    newCart.totalPrice += meal.price;
    setCartData(newCart);

  };
  const removeItem = (meal) => {
    
    const newCart = {...cartData};
    meal.amount -= 1;
    if (meal.amount === 0) {
      newCart.items.splice(meal, 1);
    }
    newCart.totalAmount -= 1;
    newCart.totalPrice -= meal.price;
    setCartData(newCart);
  };

  const clearCart = (meal) => {
    const newCart = {...cartData};
    newCart.items.forEach(item => delete item.amount);
    newCart.totalAmount = 0;
    newCart.totalPrice = 0;
    setCartData(newCart);
  }
  return (
    <cartContext.Provider value={{...cartData, addItem, removeItem, clearCart}}>
      <div style={{width: '750rem', height: 200}}>
        <SearchBar onKeyWordsChange={keyWordHandler} />
        <Meals MealsData={MealsData} />
        <Cart />
      </div>
    </cartContext.Provider>
  );
}

export default App;
