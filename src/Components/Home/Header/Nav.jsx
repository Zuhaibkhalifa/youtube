import { Box, Stack, Paper, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { logo } from "../../../Utils/Constant";
import React from "react";
import SearchBar from "../Header/SearchBar";

const Nav = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        justifyContent: "space-between",
        background: "#000",
        top: 0,
        position: "sticky",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45}></img>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Nav;
