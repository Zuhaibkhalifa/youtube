import React from "react";
import { Stack, Box } from "@mui/material";

import VideoCard from "./Cards/VideoCard";
import ChannelCard from "./Cards/ChannelCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "loading...";
  console.log(videos);
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={3}
    >
      {videos.map((value, index) => (
        <Box key={index}>
          {value.id.videoId && <VideoCard video={value} />}
          {value.id.channelId && <ChannelCard ChannelCard={value} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
