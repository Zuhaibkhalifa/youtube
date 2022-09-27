import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Box, Typography, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../../Utils/fetchData";

import Videos from "./Videos";
import { SnippetFolder } from "@mui/icons-material";

const VideoCard = () => {
  const [videos, setVideos] = useState(null);
  const [videoDetail, setVideodetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideodetails(data.items[0])
    );
    fetchApi(`search?part=snippet&relatedTpVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  // if (!videoDetail?.snippet) return "Loading";
  // const { snippet } = videoDetail;

  return (
    <Box sx={{ height: "100%", overFlowY: "hidden" }}>
      <Stack direction={{ md: "row", xs: "column" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            {/* <Typography>{videoDetail.snippet.title}</Typography> */}
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoCard;
