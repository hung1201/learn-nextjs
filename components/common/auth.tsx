import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export interface IAuthProps {
  children: any;
}

export function Auth({ children }: IAuthProps) {
  const { profile, firstLoading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!firstLoading && !profile?.username) {
      router.push("/login");
    }
  }, [firstLoading, router, profile]);

  if (!profile?.username) return <p>Loading</p>;

  return <div>{children}</div>;
}
