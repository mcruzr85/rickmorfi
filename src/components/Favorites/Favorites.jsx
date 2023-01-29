import { connect } from "react-redux";
//import Card from "../Card/Card";
import Favorite from "../Favorite/Favorite";
import style from './Favorites.module.css'

function Favorites({ myFavorites }) {

  return (
    <div  className={style.cardsContainer}>
      {myFavorites?.map((f) => {        
       return (        
          <Favorite key={f.id} id={f.id} name={f.name} image={f.image} species={f.species}
          gender={f.gender} />
        )
      })}
    </div>
  );
}


function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites, //le pasa el estado global al componente
  };
}

export default connect(mapStateToProps)(Favorites);

/*export default function Favorites(props) {
  //mapeo de favoritos

  const myFavorites = useSelector((state) => state.myFavorites);
  return (
    <div>
      {myFavorites.map((f)=>(
      <Card
        key={f.id}
        id={f.id}
        name={f.name}
        species={f.species}
        gender={f.gender}
        image={f.image}       
      />
      ) )}
    </div>
  );
}*/

/**original
 * return(
<div>
  <h1>Favorites</h1>
   {myFavorites?.map(ch => (
    <div>
    <h3>{ch.name}</h3>
    <img src={ch.image} alt="" />
    </div>
   ))}
</div>
);
 */
