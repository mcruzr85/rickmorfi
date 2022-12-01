import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import style from "./App.module.css";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setCharacters((characters) => [...characters, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id) {
    setCharacters(characters.filter((ch) => ch.id !== id));
  }

  return (
    <>
      <Nav onSearch={onSearch} />
      <hr />
      <div className={style.centrarNav}>
        <Routes>
           

          <Route path="/home" element={<Cards characters={characters} onClose={onClose} /> } />          
          
          <Route path="/about" element={<About />} />            
         
          <Route path="/detail/:detailId" element={<Detail />} />            
          
        </Routes>
      </div>
    </>
  );
}

export default App;
