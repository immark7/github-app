import { useEffect } from "react";
import { Header } from "../components/layout/Header";
import { useAppSelector } from "../hooks/useAppSelector";
import { GithubPage } from "./pages/GithubSearchPage";

export const App = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="min-h-screen h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 overflow-hidden">
        <GithubPage />
      </main>
    </div>
  );
};
