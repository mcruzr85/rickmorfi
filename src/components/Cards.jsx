import Card from "./Card";
import style from './Cards.module.css';

export default function Cards(props) {
  const { characters, onClose } = props;
  
  return <div className={style.cardsContainer}>
   {
   characters.map(ch=><Card name={ch.name} species={ch.species} 
      gender={ch.gender} image={ch.image} onClose={onClose}/>)   
   }
   </div>;
}
