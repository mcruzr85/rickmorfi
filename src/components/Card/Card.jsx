import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/actions.js";
import { connect } from "react-redux";
import style from "./Card.module.css";

 export function Card(props) {
  const { id, name, species, gender, image, onClose, 
    removeFavorite,  myFavorites } = props

const  addFavorite = props.addFavorite;
const [favorite, setFavorite] = useState(false);

useEffect(()=>{
  myFavorites.forEach(fav=>{
    if(fav.id === id){
      setFavorite(true);
    }
  });
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [myFavorites]);


function handleFavorite(){
  if(favorite){
    setFavorite(false);
    removeFavorite(id); //**** */
  }
  else{
    setFavorite(true);
    console.log(props)
    addFavorite({id:id, name:name, image:image}); //**** */
  }
}
let mih2, miOtroh2, aName, longName;
   if(species.length<21){
    mih2 = <h2>{`Species: ${species}`}</h2>
    miOtroh2 = <h2> </h2>
   } 
    else {
      mih2 = <h2>Species:</h2>
      miOtroh2 = <h2>{species}</h2>
    }

    if(name.length<21){
      aName = <h2>{`Name: ${name}`}</h2>
      longName = <h2> </h2>
     } 
      else {
        aName = <h2>Name:</h2>
        longName = <h2>{name}</h2>
      }


  return (
    <div>
      <div className={style.card}>
        <div>
          <img className={style.foto} src={image} alt="una imagen" />
        </div>
        
        <div className={`${style.info} ${style.text}`}>
          <Link to={`/detail/${id}`}>
          <h2>{`- ${id} -`}</h2>
          </Link>
         {aName}
         {longName}        
          <h2>{`Gender: ${gender}`}</h2>         
          {mih2}
          {miOtroh2}
          <button  onClick={() => onClose(id)} > X </button>
          {favorite ? (
          <button onClick={handleFavorite}>❤️</button>
           ) : (
          <button onClick={handleFavorite}>🤍</button>
           )}
        </div>
      </div>
    </div>
  );

} 


function mapDispatchToProps(dispatch){
  return {
    addFavorite: function (favorite){   //es un obj q autobindea los actionCreators con el metodo dispatch con la 
      dispatch(addFavorite(favorite)); //funcion ejecutada dentro
    },
    removeFavorite: (favoriteId) => dispatch(removeFavorite(favoriteId))
  }
}

function mapStateToProps(state){
  return{
    myFavorites: state.myFavorites  //le pasa el estado global al componente
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
//con connect el componente no solo recibio informacion del estado global sino que tambien
//empezo a tener la capacidad de conectarse al reducer