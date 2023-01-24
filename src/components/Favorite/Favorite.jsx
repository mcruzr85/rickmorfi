import React from "react";
import { Link } from "react-router-dom";
import style from "./Favorite.module.css";

const Favorite = ({ id, name, image, species, gender }) => {
  
  return (
    <div className={style.card}>
      <div>
        <img className={style.foto} src={image} alt="una imagen" />
      </div>

      <div className={`${style.info} ${style.text}`}>
       <div><Link className={style.link} to={`/detail/${id}`}>
          <h2>{`- ${id} -`}</h2>
        </Link>
        <h2>❤️</h2>      
          </div>
       
        {(name.length < 30) && <h2>{`Name: ${name}`}</h2>}
        {(name.length >= 30) && <div><h2>{`Name:`}</h2> <h2>{`${name}`}</h2></div>}
        <h2>{`Gender: ${gender}`}</h2>
        {(species.length < 30) && <h2>{`Species: ${species}`}</h2>}
        {(species.length >= 30) && <div><h2>{`Species:`}</h2> <h2>{`${species}`}</h2></div>}
      </div>
    </div>
  );
};

export default Favorite;
