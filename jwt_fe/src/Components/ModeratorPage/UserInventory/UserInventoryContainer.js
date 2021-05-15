import { connect } from 'react-redux';
import store from '../../../Store/store';
import { UserInventoryServer } from './server';
import UserInventoryView from './UserInventoryView';

const mapStateToProps = (state) => {
	return {
		UserInventory: state.UserInventoryReducer.UserInventory,
		UserInventoryStatus: state.UserInventoryReducer.UserInventoryStatus,
		messageDetails: state.UserInventoryReducer.messageDetails,
		error_message: state.UserInventoryReducer.messageDetails,
		loading: state.UserInventoryReducer.loading,
		openSnackbar: state.UserInventoryReducer.openSnackbar
	};
};

const mapDispatchToProps = () => {
	return {
		getUserInventory: () => {
			store.dispatch(UserInventoryServer.getUserInventory());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInventoryView);
