import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <div>Sidebar{children}</div>;
};

export default layout;
