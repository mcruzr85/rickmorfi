import React from 'react';
import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'

const Nav = ({onSearch}) => {
  return (
    <div className={style.barra}>
     <SearchBar onSearch={onSearch}/>
    </div>
/*
<div>
<SearchBar onSearch={(characterID) => window.alert(characterID)} />
</div>*/
  )
}

export default Nav