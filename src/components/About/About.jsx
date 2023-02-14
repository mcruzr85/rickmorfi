import React from "react";
import miFoto from "../../img/busto.jpg";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <div>
        <div className={style.photoContainer}>
          <img className={style.photo} src={miFoto} alt="mi foto" />
        </div>
      </div>

      <p className={style.noMargin}>
      Hello!! My name is Meybis, I studied informatic enginering in Cuba  
      15 years ago. I´m actually studying in the bootcamp "Soy Henry" in the
       Full Stack developer career because I was needing an update. I´m back!! 
       Every day I study and practice to achieve my goal to become the programmer
        I always dream to be.
      </p>
    </div>
  );
};

export default About;
