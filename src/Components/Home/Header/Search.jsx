import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "../Right/Videos";

import { fetchApi } from "../../../Utils/fetchData";

const Search = () => {
  const [video, setVideo] = useState([]);
  const { searchTerms } = useParams();

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerms}`).then((data) =>
      setVideo(data.items)
    );
  }, [searchTerms]);

  return (
    <Box sx={{ overflowY: "auto", height: "90vh", flex: 2, p: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for :
        <span style={{ color: "#F31503" }}> {searchTerms}</span> Videos
      </Typography>

      <Videos videos={video} />
    </Box>
  );
};

export default Search;
