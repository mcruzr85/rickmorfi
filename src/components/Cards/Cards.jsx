import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div className={style.cardsContainer}>
      {characters.map((ch) => (
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
    </div>
  );
}
