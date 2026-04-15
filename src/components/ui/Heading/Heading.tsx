import clsx from "clsx";
import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  align?: "left" | "center" | "right"; // New prop for alignment
}

const Heading: React.FC<HeadingProps> = ({
  className,
  children,
  align = "left",
  ...props
}) => {
  return (
    <div
      className={clsx(
        className,
        "font-montserrat font-bold",
        // Add the responsive font sizes for different screen sizes
        "text-[36px] md:text-[48px] lg:text-[56px]",
        // Conditionally apply text alignment based on the 'align' prop
        align === "center" && "text-center",
        align === "right" && "text-right",
        align === "left" && "text-left"
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Heading;
