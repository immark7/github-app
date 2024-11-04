import { Moon, Sun } from "lucide-react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { toggleTheme } from "../../store/slices/themeSlice";
import { Button } from "../ui/button/Button";

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const isDarkTheme = theme === "dark";
  return (
    <Button variant="ghost" size="icon" onClick={() => dispatch(toggleTheme())}>
      {isDarkTheme ? (
        <Moon className="h-5 w-5 text-foreground" />
      ) : (
        <Sun className="h-5 w-5 text-foreground" />
      )}
    </Button>
  );
};
