import axios from 'axios';
import { useDataResource } from './useDataReource';

export const UserDataInfo = ({ userId }) => {
    const user = useDataResource(async () => {
        const response = await axios.get(`/users/${userId}`);
        return response.data;
    });
    const { name, age, hairColor, hobbies } = user || {};
	
	return user ? (
		<>
		<h3>{name}</h3>
		<p>Age: {age} years</p>
		<p>Hair Color: {hairColor}</p>
		<h3>Hobbies:</h3>
		<ul>
			{hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
		</ul>
		</>
	) : <p>Loading...</p>;
}