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
    <div className={styles.grid}>
      <input
        className={styles.input}
        type="search"
        onChange={handleCharacterName}
      />
      <button
        className={styles.btnModerno}
        onClick={(e) => {
          onSearch(characterId);
        }}
      >
        Add
      </button>
      <button
        className={styles.btnModerno}
        onClick={(e) => {
          onSearch(randomX());
        }}
      >
        Random
      </button>
    </div>
  );
}
