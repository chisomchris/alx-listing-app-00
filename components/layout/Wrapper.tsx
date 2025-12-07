import { ReactNode } from "react";

const Wrapper: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return <div className={`mx-auto max-w-11/12 ${className}`}>{children}</div>;
};

export default Wrapper;
