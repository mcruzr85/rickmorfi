//import { ADD_FAVORITE, REMOVE_FAVORITE } from "./types";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const ADD_USERNAME = 'ADD_USERNAME';
export const REMOVE_USERNAME = 'REMOVE_USERNAME';


export function addFavorite(favorite){ //payload es favorite, es para mandar info adicional
    return{
        type: ADD_FAVORITE,    //action creators son funciones que devuelven acciones   
        payload: favorite
    };
}

export function removeFavorite(favoriteId){
    return{                         //las acciones son el objeto que tiene
        type: REMOVE_FAVORITE,     // como caracter obligatorio un type
        payload: favoriteId,        //
    };
}

export function addUsername(username){
    return{
        type: ADD_USERNAME,
        payload: username,
    };
}

export function removeUsername(){
    return{
        type: REMOVE_USERNAME
    }
}


