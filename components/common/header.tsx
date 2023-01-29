import React from "react";

type Props = {
  title?: String;
};

const Header = ({ title = "Header" }: Props) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default Header;
