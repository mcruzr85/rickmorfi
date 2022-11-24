import {useState} from 'react'; 
import Nav from "./components/Nav/Nav";
//import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
//import SearchBar from './components/SearchBar/SearchBar.jsx'
//
import style from './App.module.css';
import React from "react";


function App() {

 const [characters, setCharacters] = useState([]);

 function onSearch(character) {
   fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.id) {
          setCharacters((characters) => [...characters, data]);
         } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}

function onClose(id){  
  setCharacters(characters.filter((ch)=>ch.id !== id))
}

  return (
    <div>

      <div className={style.centrarNav}>
        <Nav onSearch={onSearch}/>
      </div>
      
      <hr />

      <div>
        <Cards
          characters={characters}
          onClose={onClose}          
        />
      </div>         
    </div>
  );
}

export default App;
