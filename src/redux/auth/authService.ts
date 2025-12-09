import { apiRequest } from "../../utils/axiosInstance";

const fetchProfile = async () => {
	const { data } = await apiRequest().get(`/global/auth/fetchProfile`);
	return data?.data;
};

const authService = {
	fetchProfile,
};

export default authService;
