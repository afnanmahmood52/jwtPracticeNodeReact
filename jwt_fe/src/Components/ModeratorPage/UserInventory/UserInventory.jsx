import React, { Fragment } from 'react';

export default function UserInventory(props) {
	const { UserInventory } = props;

	console.log('user data', UserInventory);
	return (
		<div className="user-inventory">
			{UserInventory ? (
				<Fragment>
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Username</th>
								<th scope="col">Email</th>
								<th scope="col">Role Id</th>
							</tr>
						</thead>
						<tbody>
							{UserInventory.map((item, index) => {
								return (
									<tr key={index}>
										<th scope="row">{index}</th>
										<td>{item.user_name}</td>
										<td>{item.email}</td>
										<td>{item.role_id === 1 ? 'ADMIN' : 'USER'}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</Fragment>
			) : null}
		</div>
	);
}
