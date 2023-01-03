import { ADD_FAVORITE, REMOVE_FAVORITE, ADD_USERNAME, REMOVE_USERNAME } from "./actions";


//import {ADD_FAVORITE, REMOVE_FAVORITE} from "./actions"; //las acciones llegan a la puerta del reducer
//de acuerdo al type de la accion es lo que realiza el reducer
const initialState = {
  //lo inicializo                 //no puede realizar tareas asincronas ni usar funciones del tipo Math.random ,
  myFavorites: [],
  username: '',
  // allCharacters: [],                                              // impuras, pq el es una funcion pura
};

export default function reducer(state = initialState, action) {    
  //generar un nuevo estado para sustituir el estado global que tengo hasta este momento.
  switch ( action.type)     
  {
    case ADD_FAVORITE:
      // no puedo modificar el estado global de otra forma
      return {
       ...state,
        myFavorites: [...state.myFavorites, action.payload]
      };

    case REMOVE_FAVORITE: //el state es inmutable, accedo a el (no lo modifico) y genero un nuevo state
      return {
       ...state,
        myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload) //no puedo olvidar de donde estoy sacando el valor(del state actual)
      };
    
      case ADD_USERNAME:
        return{
          ...state, username: action.payload
        }
     
      case REMOVE_USERNAME:
        return{
          ...state, username: ''
        }
    default:
      return state;
  }
}
