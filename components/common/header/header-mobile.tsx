import React from "react";
import { Box } from "@mui/material";

type Props = {};

const HeaderMobile = (props: Props) => {
  return (
    <Box
      display={{
        xs: "block",
        md: "none",
      }}>
      Header Mobile
    </Box>
  );
};
export default HeaderMobile;
