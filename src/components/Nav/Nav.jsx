import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
//    <NavLink  to="home" className={({isActive})=> isActive ? 'active' : ''}> 
//<NavLink to="about" className={({isActive})=> isActive ? 'active' : ''}>
const Nav = ({ onSearch }) => {

  /**let activeStyle = {
    color: "#f892df",
    fontWeight: "bold",
    textDecoration:"underline",
    
  };
  let nonActiveStyle = {
    color: "#917ae2",
    fontWeight: "bold",
    textDecoration: "none"

    <NavLink
            to="messages"
            style={({ isActive }) =>
              isActive ? activeStyle : nonActiveStyle
            }
          >
            Messages
          </NavLink>

  }; */



  return (
    <div className={style.barra}>
      <nav>
      <div className={style.display}>   
        
        <NavLink  to=""  className={({ isActive }) => isActive ? style.activeStyle : style.nonActiveStyle
            }>
          HOME
          </NavLink></div>          

      <div className={style.display}>
      <NavLink  to="about"  className={({ isActive }) => isActive ? style.activeStyle : style.nonActiveStyle
            }>
         ABOUT
        </NavLink>
      </div>
      </nav>

      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>

    /*
<div>
<SearchBar onSearch={(characterID) => window.alert(characterID)} />
</div>*/
  );
};

export default Nav;
