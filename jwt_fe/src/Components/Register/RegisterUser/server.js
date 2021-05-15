import { RegisterUser_POST_ACTIONS, RegisterUser_POST_STATUS } from './RegisterUserConstants';
import store from '../../../Store/store';
import axios from 'axios';
import { JWT_API_URL } from './../../../Config/Config';

export const RegisterUserServer = {
	handleRegisterUser
};

function handleRegisterUser(data) {
	axios({
		method: 'post',
		url: `${JWT_API_URL}/register`,
		data: data
	})
		.then((response) => {
			console.log('response from the server', response);

			if (response.data.status === 200){
				store.dispatch({
					type: RegisterUser_POST_ACTIONS.RegisterUser_POST_SUCCESS,
					payload: response.data.data,
					RegisterUserStatus: RegisterUser_POST_STATUS.RegisterUser_POST_SUCCESS,
					messageDetails: response.data.message
				});
				return;
			}

			store.dispatch({
				type: RegisterUser_POST_ACTIONS.RegisterUser_POST_FAILED,
				payload: {},
				RegisterUserStatus: RegisterUser_POST_STATUS.RegisterUser_POST_FAILED,
				error: response.data.message
			});

			
		})
		.catch((error) => {
			store.dispatch({
				type: RegisterUser_POST_ACTIONS.RegisterUser_POST_FAILED,
				payload: {},
				RegisterUserStatus: RegisterUser_POST_STATUS.RegisterUser_POST_FAILED,
				error: error
			});
		});

	return {
		type: RegisterUser_POST_ACTIONS.RegisterUser_POST_LOADING,
		RegisterUserStatus: RegisterUser_POST_STATUS.RegisterUser_POST_LOADING
	};
}
