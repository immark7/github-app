import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { githubApiService } from "../../services/githubApiService";
import { GitHubUser, TableParams } from "../../libs/types";

interface GithubState {
  users: GitHubUser[];
  totalCount: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: GithubState = {
  users: [],
  totalCount: 0,
  isLoading: false,
  error: null,
};

export const searchUsers = createAsyncThunk(
  "github/searchUsers",
  async ({ query, page, pageSize }: TableParams, { rejectWithValue }) => {
    try {
      const response = await githubApiService.getUsers(query, page, pageSize);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    clearUsers: (state) => {
      state.users = [];
      state.totalCount = 0;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.items;
        state.totalCount = action.payload.total_count;
      })
      .addCase(searchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;

        state.users = [];
        state.totalCount = 0;
      });
  },
});

export const { clearUsers } = githubSlice.actions;
export default githubSlice.reducer;
