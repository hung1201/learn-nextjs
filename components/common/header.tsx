import React from "react";
import { HeaderDesktop, HeaderMobile } from "./header/";

type Props = {
  title?: String;
};

const Header = ({ title = "Header" }: Props) => {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
};

export default Header;
