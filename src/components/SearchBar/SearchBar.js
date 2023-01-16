import React from 'react'
import classes from './SearchBar.module.scss';
import { SearchBar } from 'antd-mobile';

const inputBar = (props) => {

  const keyWordsHandler = (e) => {
    props.onKeyWordsChange(e.trim());
  }
  
  return (
      <SearchBar value={props.keyword} onChange={keyWordsHandler} className={classes.bar} placeholder="Please input" /> 
  )};

export default inputBar;
