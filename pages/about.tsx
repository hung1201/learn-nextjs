import { AdminLayout, MainLayout } from "@/components/layout";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(import("@/components/common/header"), {
  ssr: false,
});

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <DynamicHeader title={"Dynamic Header"} />
      <h1>About Page</h1>
    </div>
  );
};

About.Layout = AdminLayout;

export default About;
