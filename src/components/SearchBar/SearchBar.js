import React from 'react'
import classes from './SearchBar.module.scss';
import { SearchBar } from 'antd-mobile';

const inputBar = ({onKeyWordsChange}) => {

  const keyWordsHandler = (e) => {
    onKeyWordsChange(e.trim());
  }
  
  return (
      <SearchBar onChange={keyWordsHandler} className={classes.bar} placeholder="Please input" /> 
  )};

export default inputBar;
