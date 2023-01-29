import React from "react";
import { useNavigate } from 'react-router-dom';
import imagen from "../../img/error1.jpg";
import style from "./Error.module.css";

const Error = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Page not Found</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
      <hr />
      <img  className={style.imgStyle} src={imagen} alt="page not found" />
      
      <hr />
    </div>
  );
};

export default Error;
