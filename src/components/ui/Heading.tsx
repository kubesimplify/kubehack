import { ComponentPropsWithoutRef, ReactNode } from "react";

interface HeadingProps extends ComponentPropsWithoutRef<"h1"> {
  children: ReactNode;
}

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={`inline-flex font-bold text-2xl sm:text-5xl underline underline-offset-[10px] ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Heading;
