import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { removeUsername } from "../../redux/actions";
//    <NavLink  to="home" className={({isActive})=> isActive ? 'active' : ''}>
//<NavLink to="about" className={({isActive})=> isActive ? 'active' : ''}>
const Nav = ({ onSearch, logOut, username, removeUsername }) => {
  /**let activeStyle = { color: "#f892df", fontWeight: "bold",textDecoration:"underline" };
  let nonActiveStyle = { color: "#917ae2", fontWeight: "bold", textDecoration: "none"   };  
   <NavLink  to="messages" style={({ isActive }) => isActive ? activeStyle : nonActiveStyle }>Messages</NavLink>*/
  function handleLogout() {
    logOut();
    removeUsername();
  }

  return (
    <div className={style.barra}>
      <div>
        <nav>
         <div className={style.display}>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? style.activeStyle : style.nonActiveStyle
            }
          >
            HOME
          </NavLink>
         </div>

         <div className={style.display}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? style.activeStyle : style.nonActiveStyle
            }
          >
            ABOUT
          </NavLink>
          </div>
          
          <div className={style.display}>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? style.activeStyle : style.nonActiveStyle
              }
            >
              FAVORITES
            </NavLink>
          </div>
        
      </nav>
      </div>


      <div className={`${style.display} ${style.alinear}`}>
        <label className={style.welcome}>{`Welcome ${username.split('@')[0]} `}</label>
        <button className={style.btnLogout} onClick={handleLogout}>
          Log Out
        </button>
      </div>
      
      <div className={style.search}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>

    /*
<div>
<SearchBar onSearch={(characterID) => window.alert(characterID)} />
</div>*/
  );
};
function mapStateToProps(state) {
  return {
    username: state.username,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeUsername: () => dispatch(removeUsername()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
