import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import UserInventory from './UserInventory';
import { UserInventory_GET_STATUS } from './UserInventoryConstants';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class UserInventoryView extends Component {
	constructor(props) {
		super();
		this.state = {
			snackBarOpen: true
		};
	}

	componentDidMount = () => {
		this.props.getUserInventory();
		console.log('Render infinite');
	};

	closeSnackbar = () => {
		this.setState({
			snackBarOpen: false
		});
	};

	getScreen = (status) => {
		switch (status) {
			case UserInventory_GET_STATUS.UserInventory_GET_NEW:
				console.log('User details', this.props.UserInventory);
				// alert("in new")
				return (
					<Fragment>
						<UserInventory />
					</Fragment>
				);
				break;

			case UserInventory_GET_STATUS.UserInventory_GET_SUCCESS:
				// /alert("in success")
				// this.openSnackbar()
				console.log('User details', this.props);
				// this.openSnackbar();

				return (
					<Fragment>
						<Snackbar open={this.state.snackBarOpen} autoHideDuration={2000} onClose={this.closeSnackbar}>
							<Alert onClose={this.closeSnackbar} severity="success">
								User Information Got successfully
							</Alert>
						</Snackbar>

						<UserInventory UserInventory={this.props.UserInventory} />
					</Fragment>
				);
				break;

			case UserInventory_GET_STATUS.UserInventory_GET_FAILED:
				console.log('User details', this.props.UserInventory);
				// alert("in failed")
				return (
					<Fragment>
						<Snackbar open={this.state.snackBarOpen} autoHideDuration={2000} onClose={this.closeSnackbar}>
							<Alert onClose={this.closeSnackbar} severity="error">
								Failed to Get user Details.
							</Alert>
						</Snackbar>
						<UserInventory />
					</Fragment>
				);
				break;

			case UserInventory_GET_STATUS.UserInventory_GET_LOADING:
				// alert("in loading")
				return (
					<Fragment>
						<div className="user-inv-loading">
							<CircularProgress size={25} thickness={5} />
						</div>
					</Fragment>
				);
				break;

			default:
				return <Fragment />;
		}
	};

	render() {
		return this.getScreen(this.props.UserInventoryStatus);
	}
}

export default connect()(UserInventoryView);
