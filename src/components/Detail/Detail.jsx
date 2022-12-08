import { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {

  const {detailId} = useParams();
  const navigate = useNavigate();

  const [character , setCharacter] = useState({
   origin: {},/*
    species:"",
    gender: "",
    origin: "",
    image:"",*/
  });

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then((response)=> response.json())
    .then((data)=> {      
      if(data.name){
        setCharacter(data);       
      }else{
        window.alert("There is not characters with that id");
      }
    })
    .catch((error)=>{ window.alert(error.message)});
  }, [detailId]);

  function handleClick(){
    navigate("/home");
  }
    
 
  return (
    <div>
    <h2>Details</h2>
    <h2>{`Id: ${character.id}`}</h2>      
          <h2>{`Name: ${character.name}`}</h2>          
          <h2>{`Gender: ${character.gender}`}</h2>
          <h2>{`Species: ${character.species}`}</h2>
          <h2>{`Status: ${character.status}`}</h2>
          <h2>{`Origin: ${character.origin.name}`}</h2>
          <img  src={character.image} alt="una imagen"/>
          <button onClick={handleClick}>Go Back</button>
    </div>
  )
};

export default Detail