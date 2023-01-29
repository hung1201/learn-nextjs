import React from "react";
import { Box, Container, Stack, Link as MuiLink } from "@mui/material";
import { ROUTE_LIST } from "./route";
import Link from "@/components/Link";

type Props = {};

const HeaderDesktop = (props: Props) => {
  return (
    <Box
      display={{
        xs: "none",
        md: "block",
      }}
      py={2}>
      <Container>
        <Stack direction={"row"} justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link sx={{ ml: 2 }} key={route?.path} href={route?.path}>
              {route?.label}
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderDesktop;
