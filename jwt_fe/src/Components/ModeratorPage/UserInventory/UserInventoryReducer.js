import { UserInventory_GET_ACTIONS, UserInventory_GET_STATUS } from './UserInventoryConstants';

const initialState = {
	UserInventory: {},
	UserInventoryStatus: UserInventory_GET_STATUS.UserInventory_GET_NEW,
	messageDetails: '',
	error_message: '',
	loading: false,
	openSnackbar: false
};

export default function UserInventoryReducer(state = initialState, action) {
	switch (action.type) {
		case UserInventory_GET_ACTIONS.UserInventory_GET_NEW:
			return {
				...state,
				UserInventory: {},
				UserInventoryStatus: UserInventory_GET_STATUS.UserInventory_GET_NEW,
				messageDetails: '',
				error_message: '',
				loading: false,
				openSnackbar: false
			};

		case UserInventory_GET_ACTIONS.UserInventory_GET_SUCCESS:
			return {
				...state,
				UserInventory: action.payload,
				UserInventoryStatus: UserInventory_GET_STATUS.UserInventory_GET_SUCCESS,
				messageDetails: '',
				error_message: '',
				loading: false,
				openSnackbar: true
			};

		case UserInventory_GET_ACTIONS.UserInventory_GET_LOADING:
			return {
				...state,
				UserInventory: {},
				UserInventoryStatus: UserInventory_GET_STATUS.UserInventory_GET_LOADING,
				messageDetails: '',
				error_message: '',
				loading: true,
				openSnackbar: false
			};

		case UserInventory_GET_ACTIONS.UserInventory_GET_FAILED:
			return {
				...state,
				UserInventory: {},
				UserInventoryStatus: UserInventory_GET_STATUS.UserInventory_GET_FAILED,
				error_message: action.error,
				loading: false,
				openSnackbar: false
			};

		default:
			return { ...state };
	}
}
