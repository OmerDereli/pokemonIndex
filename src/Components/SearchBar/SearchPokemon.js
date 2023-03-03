import React from "react";
import TextField from "@mui/material/TextField";
import "./SearchPokemon.css";

function SearchPokemon(props) {
  return (
    <div className="search">
      <TextField
        className="search-text"
        id="outlined-basic"
        variant="standard"
        fullWidth
        label="Search your Pokemon!"
        InputProps={{ disableUnderline: true }}
      />
    </div>
  );
}

export default SearchPokemon;
