import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Left/Sidebar";
import Videos from "./Right/Videos";

import { fetchApi } from "../../Utils/fetchData";

const Home = () => {
  const [selected, setSelected] = useState("New");
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selected}`).then((data) =>
      setVideo(data.items)
    );
  }, [selected]);

  return (
    <Stack sx={{ flexDirection: { sx: "colimn", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar selected={selected} setSelected={setSelected} />
        <Typography
          variant="body2"
          className="copyright"
          sx={{ color: "#fff" }}
        >
          Copyright
        </Typography>
      </Box>
      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2, p: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selected} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={video} />
      </Box>
    </Stack>
  );
};

export default Home;
