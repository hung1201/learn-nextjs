import { LayoutProps } from "@/models";
import Link from "next/link";
import * as React from "react";

export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Main layout</h1>
      <Link href="/">Home</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/posts">Posts</Link>
      <div>{children}</div>
    </div>
  );
}
