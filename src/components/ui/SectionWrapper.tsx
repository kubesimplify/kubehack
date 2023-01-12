import { ComponentPropsWithoutRef, ReactNode } from "react";

interface SectionWrapperProps extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
  id: string;
}
const SectionWrapper = ({ children, id ,className, ...props}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`flex flex-col gap-8 items-center justify-center pt-12 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
