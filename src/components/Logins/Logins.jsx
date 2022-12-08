import { useState } from "react";
import validate from "../Error/validation";
import style from "./Logins.module.css";

const Logins = ({login}) => {
    const [userData, setUserData] = useState({ user: "", password: ""  });
    const [errors, setErrors] = useState({ user: "", password: "" });
  
    function handleUserData(e) {
      setUserData({...userData, [e.target.name] : e.target.value});
      setErrors(validate({...userData, [e.target.name] : e.target.value}));
    }
  
    function handleSubmit(e){  //ok
      e.preventDefault();  //me permite validar antes de pasar datos incorrectos al server
      login(userData);
    }  
    return (
      <div>
        <h2>Welcome to our Rick andMorty App</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user">Name:</label>
            <input
              id="user"
              name="user"
              type="text"
              placeholder="Type your username"
              className={errors.user && style.errorInput}
              value={userData.user}
              onChange={handleUserData}
            ></input>
           {errors.user && <p className={`${style.errorP}`}>{errors.user}</p>}
          </div>
  
          <div>
          <label htmlFor="pass">Password:</label>
          <input
            id="pass"
            name="password"
            type="password"
            placeholder="Type your password"
            className={errors.password && style.errorInput}
            value={userData.password}
            onChange={handleUserData}
          ></input>
          {errors.password && <p className={`${style.errorP}`}>{errors.password}</p>}
          </div>  
          <button>Login</button>
        </form>
      </div>
    );
  
}

export default Logins