import { FunctionComponent } from "react";
import { cn } from "../../../libs/utils";

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
};

interface Props {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Avatar: FunctionComponent<Props> = ({
  src,
  alt = "image",
  size = "md",
  className = "",
}) => {
  return (
    <div className={cn(sizeClasses[size], className)}>
      <img
        src={src}
        alt={alt}
        className="rounded-full object-cover w-full h-full"
        loading="lazy"
      />
    </div>
  );
};
