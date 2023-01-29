import { LayoutProps } from "@/models";
import { Stack, Box, Container } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import Footer from "../common/footer";
import Header from "../common/header";

export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight={"100vh"}>
      <Header />

      <Box component="main" flexGrow={1}>
        {/* <Container
          maxWidth="sm"
          sx={{
            bgcolor: "primary.main",
          }}>
          SM
        </Container>
        <br />
        <Container
          sx={{
            bgcolor: "primary.main",
          }}>
          MD
        </Container> */}
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/works">Works</Link>
        {children}
      </Box>
      {/* <Link href="/">Home</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/posts">Posts</Link>
      <div>{children}</div> */}
      <Footer />
    </Stack>
  );
}
