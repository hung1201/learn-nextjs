import { authApi } from "@/api-client";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import * as React from "react";

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  const router = useRouter();
  const { profile, login, logout, error } = useAuth({
    revalidateOnMount: false,
  });
  async function handleLogin(params: any) {
    try {
      await login();
      router.push("/about");
    } catch (error) {
      console.log("login failed", error);
    }
  }
  async function handleGetProfile(params: any) {
    try {
      await authApi.getProfile();
    } catch (error) {
      console.log("get profile failed", error);
    }
  }
  async function handleLogout(params: any) {
    try {
      await logout();
      console.log("redirect to login Page");
    } catch (error) {
      console.log("logout failed", error);
    }
  }

  return (
    <div>
      <h1>Login </h1>
      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetProfile}>Get profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
