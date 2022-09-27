import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Components/Home/Home";
import Nav from "../Components/Home/Header/Nav.jsx";
import Search from "../Components/Home/Header/Search";
import Video from "../Components/Home/Right/VideoCard";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#000" }}>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Video/:id" exact element={<Video />} />
          <Route path="/Search/:searchTerms" exact element={<Search />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
