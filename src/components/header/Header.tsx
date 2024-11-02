import { GitBranch } from "lucide-react";
import { ThemeToggle } from "../theme-toggle/ThemeToggle";

export const Header = () => (
  <header className="border-b sticky top-0 z-100">
    <div className="px-4 h-14 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <GitBranch className="h-8 w-8" />
        <span className="text-xl font-bold">GitSearch</span>
      </div>
      <ThemeToggle />
    </div>
  </header>
);
