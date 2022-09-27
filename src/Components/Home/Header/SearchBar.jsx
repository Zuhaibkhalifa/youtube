import React from "react";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerms, setSearchTerms] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerms) {
      navigate(`/search/${searchTerms}`);
      setSearchTerms("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        boxShadow: "none",
        pl: 2,
        borderRadius: 20,
        border: "1px solid #FC1B09",
        // background: "#FC1B09",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
      />
      {searchTerms}
      <IconButton sx={{ color: "red", p: "10px" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
