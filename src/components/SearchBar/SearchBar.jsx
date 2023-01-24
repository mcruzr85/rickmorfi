import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [characterId, setCharacterId] = useState("");


  function handleCharacterName(e) {
    setCharacterId(e.target.value);
  }

  const randomX = () => {
    let num = Math.ceil(Math.random() * 1000);
    if (num > 826) {
      num = num / 10;
     
      return Math.ceil(num);
    } else return num;
    
  };

  return (
    <div className={styles.container}>
      <input
        className={`${styles.inputType} ${styles.comun}`}
        type="text" 
        placeholder="Insert the Id..."
        value={characterId}
        onChange={handleCharacterName}        
      />     
      
        <button
          className={`${styles.btnModerno} ${styles.comun}`}
          onClick={(e) => {
            onSearch(characterId);
            setCharacterId("");
          }}
        >
          Add
        </button>     

      
        <button
          className={`${styles.btnModerno} ${styles.comun}`}
          onClick={(e) => {
            onSearch(randomX());
          }}
        >
          Random
        </button>    
    </div>
  );
}

