import { GITHUB_API_URL } from "../libs/constants";
import { ApiService } from "./apiService";

export class GithubApiService extends ApiService {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  public async getUsers(
    query: string,
    page: number = 1,
    perPage: number = 30
  ): Promise<any> {
    const queryString = `/search/users?q=${query}&per_page=${perPage}&page=${page}`;
    return await this.get(queryString);
  }
}

export const githubApiService = new GithubApiService(GITHUB_API_URL);
