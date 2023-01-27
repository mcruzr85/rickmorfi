import React from 'react'
import miFoto from '../../img/busto.jpg';
import style from './About.module.css';



const About = () => {
  return (
    <div className={style.container}>
        <h2 className={style.noMargin}>About me</h2>
        <div  className={style.photoContainer}>
        <img className={style.photo} src={miFoto} alt='mi foto'/>       
        </div>
        <p  className={style.noMargin}>Hello!! My name is Meybis, I studied informatic enginering in Cuba 15 years ago. Today I´m studying in 
          Soy Henry bootcamp in the career Full Stack developer because I was needing an update. I´m back!!
          Every day I study and practice to achieve my goal to became the programmer I always dream to be.</p>
    </div>
  )
}

export default About