import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <main>Sidebar{children}</main>;
};

export default layout;
