import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from './UserInfo';
import { UserLoader } from './UserLoader';
import { ResourceLoader } from './ResourceLoader';
import { ProductInfo } from './ProductInfo';
import { DataSource } from "./DataSource";
import axios from 'axios';

function App() {
	const userIds = ['123', '234', '345'];
	const getServerData = url => async () => {
		const response = await axios.get(url);
		return response.data;
	}
	return (
		<>
		<DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
			<UserInfo />
		</DataSource>
		</>
		// <>
		// 	<ResourceLoader 
		// 		resourceUrl="users/123" 
		// 		dataKey="user"
		// 	>
		// 		<UserInfo />
		// 	</ResourceLoader>
		// 	<ResourceLoader 
		// 		resourceUrl="products/1234" 
		// 		dataKey="product"
		// 	>
		// 		<ProductInfo />
		// 	</ResourceLoader>
		// </>
	);
	// return (
	// 	<>
	// 		<CurrentUserLoader>
	// 			<UserInfo />
	// 		</CurrentUserLoader>
	// 		{
	// 			userIds.map(id => {
	// 				return (
	// 				<UserLoader userId={id}>
	// 					<UserInfo />
	// 				</UserLoader>
	// 				)
	// 			})
	// 		}
	// 	</>
	// );
}

export default App;