import { apiRequest } from "../../utils/axiosInstance";

const fetchProfile = async () => {
	const { data } = await apiRequest().get(`/global/user/profile`);
	return data?.data;
};

const authService = {
	fetchProfile,
};

export default authService;
