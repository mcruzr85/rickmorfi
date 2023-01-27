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
import Footer from "./components/Footer/Footer";
import "./App.module.css";


function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "meybis@gmail.com";
  const password = "hola12345";

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (!access) && navigate("/"); //si acces esta en false o sea no ha hecho login, redirecciona a la pag de login que es 
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

  function logOut() {
    setAccess(false);
    navigate('/');    
  }

  function validateNonRepeat(id,arrayCharacters){
    return arrayCharacters.some(x => x.id === id);

  }

  function onSearch(character) {
   // if(validateNonRepeat(character, characters)){
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setCharacters((characters) => [...characters, data]);   
          navigate("/home");      
        } else {
          window.alert("Invalid ID");
        }
      });
   

   // }else{
    //  window.alert("That character is already displayed")
  //  }
     
  }

  function onClose(id) {
    setCharacters(characters.filter((ch) => ch.id !== id));
  }

  return (
    <div >
      {(location.pathname !== '/') && <Nav onSearch={onSearch} logOut={logOut}/>}

      <hr />

      <Routes>
        <Route path="/" element={<Logins login={login} />} />

        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />

        <Route path="/about" element={<About />} />      

        <Route path="/detail/:detailId" element={<Detail />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<Error />} />
      </Routes>

     
      {(location.pathname !== '/') && <Footer />}

      
    </div>
  );
}

export default App;
