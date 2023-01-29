import { useAuth } from "@/hooks";
import { LayoutProps } from "@/models";
import Link from "next/link";
import * as React from "react";
import { Auth } from "../common";

export interface IAdminLayoutProps {}

export function AdminLayout({ children }: LayoutProps) {
  const { logout, profile } = useAuth();
  const logoutHandle = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("logout fail", error);
    }
  };

  return (
    <Auth>
      <h1>Admin layout</h1>
      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={logoutHandle}>Logout</button>
      <div>Sidebar</div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div>{children}</div>
    </Auth>
  );
}
