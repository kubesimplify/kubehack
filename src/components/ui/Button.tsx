import { ComponentPropsWithoutRef, ReactNode } from "react";

interface ButtonWithLinkProps extends ComponentPropsWithoutRef<"a"> {
  children: ReactNode;
}

const ButtonWithLink = ({
  children,
  className,
  ...props
}: ButtonWithLinkProps) => {
  return (
    <a
      className={`flex gap-2 items-center px-2 py-1 text-sm sm:px-4 sm:py-2 sm:text-lg border-2 border-white rounded-lg bg-light-background/10 hover:text-cyan hover:border-cyan cursor-pointer ${className}`}
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
};

export default ButtonWithLink;
