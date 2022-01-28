import { printProps } from './printProps';
import { UserInfo } from './UserInfo';
import { withUser } from './withUser';
import { UserInfoForm } from './UserInfoForm';
import { ResourceUserInfoForm } from './ResourceUserInfoForm'

// const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, '123');

function App() {
	return (
		<>
			{/* <UserInfoWrapped a={1} b="Hello" c={{ userName: 'Shaun' }} /> */}
			<UserInfoWithLoader />
			<UserInfoForm />
			<ResourceUserInfoForm />
		</>
	)
}

export default App;