import { AlertCircle } from "lucide-react";
import { cn } from "../../libs/utils";
import { FunctionComponent } from "react";

interface Props {
  message?: string | null;
  className?: string;
}

export const ErrorMessage: FunctionComponent<Props> = ({
  message,
  className = "",
}) => {
  if (!message) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2 text-destructive bg-destructive/10 rounded-lg px-3 py-2",
        className
      )}
    >
      <AlertCircle className="h-4 w-4" />
      <p className="text-sm">{message}</p>
    </div>
  );
};
