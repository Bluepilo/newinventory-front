import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import settingsSlice from "./settings/settingsSlice";

const rootReducer = combineReducers({
	auth: authSlice,
	settings: settingsSlice,
});

export default rootReducer;
