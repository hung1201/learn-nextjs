import { AdminLayout, MainLayout } from "@/components/layout";
import dynamic from "next/dynamic";
import { Box, Typography } from "@mui/material";
// const DynamicHeader = dynamic(import("@/components/common/header"), {
//   ssr: false,
// });

type Props = {};

const About = (props: Props) => {
  return (
    <Box>
      <Typography component={"h1"} variant={"h3"} color="primary">
        About Page
      </Typography>
      {/* <DynamicHeader title={"Dynamic Header"} /> */}
      <h1>About Page</h1>
    </Box>
  );
};

About.Layout = AdminLayout;

export default About;
