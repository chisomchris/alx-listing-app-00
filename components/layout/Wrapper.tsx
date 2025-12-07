import { ReactNode } from "react";

const Wrapper: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`mx-auto max-w-[min(calc(11/12*100vw),1440px)] ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
