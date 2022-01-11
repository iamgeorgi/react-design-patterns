import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserInfo } from './UserInfo';

export const CurrentUserLoader = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await axios.get('/current-user');
			setUser(response.data);
		})();
	}, []);


    // Returns all chidrens of this component and adds the state as a prop
	return (
		<>
		{React.Children.map(children, child => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, { user });
			}

			return child;
		})}
		</>
	);

    // return (
	// 	<>
    //         <UserInfo user={user} />
	// 	</>
	// );
}