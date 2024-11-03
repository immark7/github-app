export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  type: string;
  score: number;
}

export interface GitHubResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUser[];
}

export interface TableParams {
  query?: string;
  page?: number;
  pageSize?: number;
}

export interface Column {
  header: string;
  key: string;
  className?: string;
  render?: (value: any, row: any) => React.ReactNode;
}
