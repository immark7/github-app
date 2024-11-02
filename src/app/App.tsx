import { Header } from "../components/header/Header";
import { AppProvider } from "../providers";
import { GithubPage } from "./pages/GithubSearchPage";

export const App = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <GithubPage />
      </div>
    </AppProvider>
  );
};
