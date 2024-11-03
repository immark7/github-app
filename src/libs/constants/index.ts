export const GITHUB_API_URL = "https://api.github.com";
export const THEME_STORAGE_KEY = "theme";
export const DEBOUNCED_TIME = 500;
export const PAGE_SIZE = 20;
export const ERROR_MESSAGES: Record<number | string, string> = {
  403: "API rate limit exceeded. Please try again later",
  500: "GitHub service error. Please try again later",
  Default: "An error occurred. Please again later",
};
