
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDataResource = getResource => {
	const [resource, setResource] = useState(null);

	useEffect(() => {
		(async () => {
			const result = await getResource();
			setResource(result);
		})();
	}, [getResource]);

	return resource;
}