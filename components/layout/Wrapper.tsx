import { ReactNode } from "react";

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="mx-auto max-w-11/12">{children}</div>;
};

export default Wrapper;
