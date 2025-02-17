import { ComponentPropsWithRef, ReactNode } from "react";

interface Props extends ComponentPropsWithRef<"button"> {
  children: ReactNode;
}

function Button({ children, ...rest }: Props) {
  return (
    <button className="btn btn-full" {...rest}>
      {children}
    </button>
  );
}

export default Button;
