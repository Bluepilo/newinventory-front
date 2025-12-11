interface UserDetailsType {
	id: number;
	businessId: number;
	fullName: string;
	firstName: string;
	lastName: string;
	phoneNo: string;
	email: string;
	businessRole: {
		name: string;
		isAdmin: boolean;
	};
	role: {
		name: string;
		isAdmin: boolean;
		permissions: {
			method: string;
		}[];
	};
	businessRoleId: number;
	referralCode: string;
	shopId: number;
	business: {
		id: number;
		name: string;
		regNo: string;
		onboardingSteps: any;
		image: string;
		email: string;
		phone: string;
		address: string;
		canOnboard: boolean;
		currencyCode: string;
		countryCode: string;
		currency: {
			symbol: string;
			id: string;
			code: string;
		};
		country: {
			name: string;
			code: string;
		};
		state: string;
	};
	shop: {
		name: string;
		isActive: boolean;
	};
	image: string;
	address: string;
	username: string;
	organizationId: string | number;
	organization: {
		id: number;
		name: string;
		email: string;
		phone: string;
		address: string;
		countryCode: string;
		isTrialOn: boolean;
		image: string;
		ownerFirstName: string;
		ownerLastName: string;
		subscriptionPlan: {
			name: string;
			id: number;
			noOfShops: number;
			noOfUsers: number;
			noOfTransactions: number;
		};
		wallet: {
			balance: string;
		};
		uniqueId: string;
	};
	allowedBusinesses: {
		business: {
			id: number;
			name: string;
		};
	}[];
	currentBusinessAccess: {
		makePurchase: boolean;
	};
}

interface NotifcationType {
	unreadNotifications: number;
	notifications: {
		rows: {
			id: number;
			title: string;
			message: string;
			readAt: string;
			createdAt: Date;
		}[];
	};
}

const userDetailsType: UserDetailsType | Record<string, never> = {};
const notificationType: NotifcationType | Record<string, never> = {};

export { userDetailsType, notificationType };
