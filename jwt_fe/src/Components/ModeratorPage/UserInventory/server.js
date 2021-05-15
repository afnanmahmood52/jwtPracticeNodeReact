import { UserInventory_GET_ACTIONS, UserInventory_GET_STATUS } from './UserInventoryConstants';
import store from '../../../Store/store';
import axios from 'axios';
import { JWT_API_URL } from './../../../Config/Config';

export const UserInventoryServer = {
	getUserInventory
};

function getUserInventory() {
	axios({
		method: 'get',
		url: `${JWT_API_URL}/users/getAll`
	})
		.then((response) => {
			if (response) console.log('response from the server', response.data.data);

			store.dispatch({
				type: UserInventory_GET_ACTIONS.UserInventory_GET_SUCCESS,
				payload: response.data.data,
				UserInventoryStatus: UserInventory_GET_STATUS.UserInventory_GET_SUCCESS
			});
			return;
		})
		.catch((error) => {
			store.dispatch({
				type: UserInventory_GET_ACTIONS.UserInventory_GET_FAILED,
				payload: {},
				UserInventoryStatus: UserInventory_GET_STATUS.UserInventory_GET_FAILED,
				error: error
			});
			return;
		});

	return {
		type: UserInventory_GET_ACTIONS.UserInventory_GET_LOADING,
		UserInventoryStatus: UserInventory_GET_STATUS.UserInventory_GET_LOADING
	};
}
