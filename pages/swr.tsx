import { StudentDetail } from "@/components/swr";
import * as React from "react";

export interface ISWRPageProps {}

export default function SWRPage(props: ISWRPageProps) {
  return (
    <div>
      <h1>SWR Page</h1>
      <ul>
        <li>
          <StudentDetail studentId={"lea2aa9l7x3a5v0"} />
        </li>
        <li>
          <StudentDetail studentId={"lea2aa9l7x3a5v0"} />
        </li>
        <li>
          <StudentDetail studentId={"lea2aa9l7x3a5v0"} />
        </li>
        {/* <li>
          <StudentDetail studentId={"lea2aa9l7x3a5v1"} />
        </li>
        <li>
          <StudentDetail studentId={"lea2aa9l7x3a5v2"} />
        </li> */}
      </ul>
    </div>
  );
}
