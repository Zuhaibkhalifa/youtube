import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../../../Utils/Constant";

const Sidebar = ({ selected, setSelected }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((value) => (
        <button
          onClick={() => setSelected(value.name)}
          className="category-btn"
          style={{
            background: value.name === selected && "#FC1503",
            color: "#fff",
          }}
          key={selected.name}
        >
          <span
            style={{
              color: value.name === selected ? "#fff" : "#FC1503",
              marginRight: "15px",
            }}
          >
            {value.icon}
          </span>
          <span style={{ opacity: value.name === selected ? 1 : 0.6 }}>
            {value.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
