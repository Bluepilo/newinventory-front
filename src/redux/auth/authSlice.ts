import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { displayError } from "../../utils/display";
import { userDetailsType } from "../../utils/types";

const initialState = {
	loading: false,
	user: userDetailsType,
};

export const fetchUserProfile = createAsyncThunk(
	"auth/profile",
	async (_, thunkAPI) => {
		try {
			const res = await authService.fetchProfile();
			return res;
		} catch (error) {
			const message = displayError(error, false);
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
		logout: (state) => {
			state.user = {};
			state.loading = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
			state.user = action.payload;
		});
	},
});

export const { clearLoad, logoutFromStorage, logout } = authSlice.actions;

export default authSlice.reducer;
