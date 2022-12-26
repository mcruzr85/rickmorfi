import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import Logins from "./components/Logins/Logins";
import "./App.module.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "meybis@gmail.com";
  const password = "hola12345";

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (!access) && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  function login(userData) {
    if (userData.user === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      return window.alert("Incorrect username or password");
    }
  }

  function LogOut() {
    setAccess(false);
    navigate('/');
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setCharacters((characters) => [...characters, data]);
        } else {
          window.alert("Invalid ID");
        }
      });
    navigate("/home");
  }

  function onClose(id) {
    setCharacters(characters.filter((ch) => ch.id !== id));
  }
/** <Route path="/favorites" element={<Favorites />} /> */
  return (
    <>
      {(location.pathname !== '/') && <Nav onSearch={onSearch} LogOut={LogOut} />}

      <hr />

      <Routes>
        <Route path="/" element={<Logins login={login} />} />

        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />

        <Route path="/about" element={<About />} />
      

        <Route path="/detail/:detailId" element={<Detail />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<Error />} />
      </Routes>
      
    </>
  );
}

export default App;
