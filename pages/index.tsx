import { MainLayout } from "@/components/layout";
import { Box } from "@mui/material";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Box>Home Page</Box>;
}

Home.Layout = MainLayout;

