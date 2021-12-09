import React, {useState} from "react";
import useDebounce from "./useDebounce";

import './SearchInput.css';


const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debounceChange = useDebounce(onChange, 700);
  function handleChange(event) {
    setDisplayValue(event.target.value);
    debounceChange(event.target.value);
  }
  return(
        <>
        <h3>Pesquisar Anime</h3>
        <input type="search"
        placeholder="Pesquisar…"
        value={displayValue}
        onChange={handleChange} />
        </>
)};

export default SearchInput;
