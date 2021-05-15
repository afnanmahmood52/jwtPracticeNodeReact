import { RegisterUser_POST_ACTIONS, RegisterUser_POST_STATUS } from './RegisterUserConstants';

const initialState = {
	RegisterUser: {},
	RegisterUserStatus: RegisterUser_POST_STATUS.RegisterUser_POST_NEW,
	messageDetails: '',
	error_message: '',
	loading: false
};

export default function RegisterUserReducer(state = initialState, action) {
	switch (action.type) {
		case RegisterUser_POST_ACTIONS.RegisterUser_POST_NEW:
			return {
				...state,
				RegisterUser: {},
				RegisterUserStatus: RegisterUser_POST_STATUS.RegisterUser_POST_NEW,
				messageDetails: '',
				error_message: '',
				loading: false
			};

		case RegisterUser_POST_ACTIONS.RegisterUser_POST_SUCCESS:
			return {
				...state,
				RegisterUser: action.payload,
				RegisterUserStatus: RegisterUser_POST_STATUS.RegisterUser_POST_SUCCESS,
				messageDetails: '',
				error_message: '',
				loading: false
			};

		case RegisterUser_POST_ACTIONS.RegisterUser_POST_LOADING:
			return {
				...state,
				RegisterUser: {},
				RegisterUserStatus: RegisterUser_POST_STATUS.RegisterUser_POST_LOADING,
				messageDetails: '',
				error_message: '',
				loading: true
			};

		case RegisterUser_POST_ACTIONS.RegisterUser_POST_FAILED:
			return {
				...state,
				RegisterUser: {},
				RegisterUserStatus: RegisterUser_POST_STATUS.RegisterUser_POST_FAILED,
				error_message: action.error,
				loading: false
			};

		default:
			return { ...state };
	}
}
