import Card from "../Card/Card";
import style from "./Cards.module.css";
import Nada from "../Nada/Nada";

export default function Cards({ characters, onClose } ) {

  return (
    <div className={style.cardsContainer}>
      {characters && characters.map((ch) => (
        <Card
          key={ch.id}
          id={ch.id}
          name={ch.name}
          species={ch.species}
          gender={ch.gender}
          image={ch.image}
          onClose={onClose}
        />
      ))}

      {characters.length === 0 && <Nada />}
    </div>
  );
}
