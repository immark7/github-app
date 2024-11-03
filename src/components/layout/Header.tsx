import { ThemeToggle } from "../theme-toggle/ThemeToggle";
import { GitIcon } from "../icons/Icons";

export const Header = () => (
  <header className="border-b sticky top-0 z-100">
    <div className="px-4 h-14 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <GitIcon />
        <span className="text-xl font-bold">GitSearch</span>
      </div>
      <ThemeToggle />
    </div>
  </header>
);
