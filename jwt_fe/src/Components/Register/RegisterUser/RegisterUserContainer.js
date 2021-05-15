import { connect } from 'react-redux';
import store from '../../../Store/store';
import { RegisterUserServer } from './server';
import RegisterUserView from './RegisterUserView';
import { RegisterUser_POST_ACTIONS } from './RegisterUserConstants';

const mapStateToProps = (state) => {
	return {
		RegisterUser: state.RegisterUserReducer.RegisterUser,
		RegisterUserStatus: state.RegisterUserReducer.RegisterUserStatus,
		messageDetails: state.RegisterUserReducer.messageDetails,
		error_message: state.RegisterUserReducer.messageDetails,
		loading: state.RegisterUserReducer.loading,
	};
};

const mapDispatchToProps = () => {
	return {
		handleRegisterUser: (data) => {
			store.dispatch(RegisterUserServer.handleRegisterUser(data));
		},
		resetReducer:()=>{
			store.dispatch({type: RegisterUser_POST_ACTIONS.RegisterUser_POST_NEW});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserView);
