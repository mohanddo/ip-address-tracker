import styles from "./SearchBar.module.css";
import { React, useEffect, useRef, useState } from "react";
import { ReactComponent as IconArrow } from "../../assets/images/icon-arrow.svg";
function SearchBar({ OnClick }) {
  const inputRef = useRef(null);
  const [input, SetInput] = useState("");

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        OnClick(event.target.value);
      }
    };

    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener("keypress", handleKeyPress);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("keypress", handleKeyPress);
      }
    };
  }, [OnClick]);

  return (
    <div className={styles.SearchBarContainer}>
      <label className={styles.ip_address_search_label}>
        <input
          type="search"
          id={styles.ip_address_search}
          placeholder="Search for any IP address or domain"
          onChange={(e) => {
            SetInput(e.target.value);
          }}
          ref={inputRef}
        />
      </label>

      <button
        className={styles.search_button}
        onClick={() => {
          OnClick(input);
        }}
      >
        <IconArrow className={styles.icon_arrow} />
      </button>
    </div>
  );
}

export default SearchBar;
