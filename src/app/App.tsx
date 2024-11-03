import { useEffect } from "react";
import { Header } from "../components/layout/Header";
import { useAppSelector } from "../hooks/useAppSelector";
import { GithubPage } from "./pages/GithubPage";

export const App = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <GithubPage />
    </div>
  );
};
