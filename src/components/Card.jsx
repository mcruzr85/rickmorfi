import style from './Card.module.css';

export default function Card({name, species, gender, image, onClose}) {
   return (
      <div className={`${style.cardStyle} ${style.cardShadow}`}>
         <div className={style.btnContainer}>
         <button className={style.btn} onClick={onClose}>X</button>
         </div>
        
         <h2>{name}</h2>
         <h2>{gender}</h2>
         <h2>{species}</h2>
         <img className={style.borde} src={image} alt="una imagen" /> 
      </div>
   ); 
}
