import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { displayError } from "../../utils/display";

const initialState = {
	loading: false,
	carousels: [] as any,
	visited: false,
};

export const fetchUserProfile = createAsyncThunk(
	"auth/profile",
	async (_, thunkAPI) => {
		try {
			const res = await authService.fetchProfile();
			return res;
		} catch (error) {
			const message = displayError(error, true);
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		clearLoad: (state) => {
			state.loading = false;
		},
		logoutFromStorage: (state) => {
			localStorage.removeItem("@savedtoken");
			state.loading = false;
		},
	},
	extraReducers: () => {},
});

export const { clearLoad, logoutFromStorage } = authSlice.actions;

export default authSlice.reducer;
