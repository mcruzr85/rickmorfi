import { useState } from "react";
import { Link } from "react-router-dom";
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
        className={`${styles.inputType} ${styles.display}`}
        type="search"
        onChange={handleCharacterName}
        placeholder="Insert the card Id you want to search..."
      />
      <Link to="/">
        <button
          className={`${styles.btnModerno} ${styles.display}`}
          onClick={(e) => {
            onSearch(characterId);
          }}
        >
          Add
        </button>
      </Link>

      <Link to="/">
        <button
          className={`${styles.btnModerno} ${styles.display}`}
          onClick={(e) => {
            onSearch(randomX());
          }}
        >
          Random
        </button>
      </Link>
    </div>
  );
}

