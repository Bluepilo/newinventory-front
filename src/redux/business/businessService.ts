import { apiRequest } from "../../utils/axiosInstance";

const switchBusiness = async (bizId: number) => {
	const { data } = await apiRequest().post(
		`/global/user/switch-business/${bizId}`,
		{}
	);
	return data;
};

const businessService = {
	switchBusiness,
};

export default businessService;
