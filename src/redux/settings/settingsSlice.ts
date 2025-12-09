import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	minimizedNav: true,
};

export const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		changeNavMinimized: (state, action) => {
			state.minimizedNav = action.payload;
		},
	},
	extraReducers: () => {},
});

export const { changeNavMinimized } = settingsSlice.actions;

export default settingsSlice.reducer;
