import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { RegisterUser_POST_STATUS } from './RegisterUserConstants';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class RegisterUserView extends Component {
	constructor(props) {
		super();
		this.state = {
			snackBarOpen: true,
			loading: false
		};
	}

	closeSnackbar = () => {
		this.setState({
			snackBarOpen: false
		});
	};

	submitHandler = () =>{
		const data = {
			user_name: this.props.userName,
			email: this.props.email,
			password: this.props.password,
			role_id: this.props.roleID
		};
		
		this.props.handleRegisterUser(data)
	}

	getScreen = (status) => {
		switch (status) {
			case RegisterUser_POST_STATUS.RegisterUser_POST_NEW:
				console.log('User details', this.props.RegisterUser);
				// alert("in new")
				return (
					<Fragment>
						<button type="button" className="btn btn-primary" onClick={this.submitHandler}>
							Submit
						</button>
					</Fragment>
				);
				break;

			case RegisterUser_POST_STATUS.RegisterUser_POST_SUCCESS:
				// /alert("in success")
				// this.openSnackbar()

				
				if(this.state.loading){	
					console.log('User details', this.props);
					this.props.resetStates();

					this.state = {
						...this.state,
						loading:false,
					}
				}

				return (
					<Fragment>
						<Snackbar open={this.state.snackBarOpen} autoHideDuration={2000} onClose={this.closeSnackbar}>
							<Alert onClose={this.closeSnackbar} severity="success">
								User Created Successfully
							</Alert>
						</Snackbar>

						<button type="button" className="btn btn-primary" onClick={this.submitHandler}>
							Submit
						</button>
					</Fragment>
				);
				break;

			case RegisterUser_POST_STATUS.RegisterUser_POST_FAILED:
				console.log('User details', this.props.RegisterUser);
				// alert("in failed")
				if(this.state.loading){
					
					console.log('User details', this.props);
					this.props.resetStates();

					this.state = {
						...this.state,
						loading:false,
					}
				}

				return (
					<Fragment>
						<Snackbar open={this.state.snackBarOpen} autoHideDuration={2000} onClose={this.closeSnackbar}>
							<Alert onClose={this.closeSnackbar} severity="error">
								Failed to create a user
							</Alert>
						</Snackbar>
						
						<button type="button" className="btn btn-primary" onClick={this.submitHandler}>
							Submit
						</button>
					</Fragment>
				);
				break;

			case RegisterUser_POST_STATUS.RegisterUser_POST_LOADING:
				// alert("in loading")
				
				this.state = {
					...this.state,
					loading:true,
					snackBarOpen: true
				}
				return (
					<Fragment>
						<button class="btn btn-primary submit-btn" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Submitting
                        </button>
					</Fragment>
				);
				break;

			default:
				return <Fragment />;
		}
	};

	render() {
		return this.getScreen(this.props.RegisterUserStatus);
	}
}

export default connect()(RegisterUserView);
