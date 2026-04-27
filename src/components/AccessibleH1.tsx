import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const AccessibleH1 = forwardRef<HTMLHeadingElement, Props>(
  ({ children, style, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        tabIndex={-1} // Makes the element programmatically focusable
        style={{
          outline: "none",
          ...style,
        }}
        {...props}
      >
        {children}
      </h1>
    );
  },
);

export default AccessibleH1;
