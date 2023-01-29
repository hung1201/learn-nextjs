import { LayoutProps } from "@/models";
import Link from "next/link";
import * as React from "react";

export interface IEmptyLayoutProps {}

export function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
