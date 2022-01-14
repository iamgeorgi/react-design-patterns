import { ControlledForm } from "./ControlledForm";
import { UncontrolledForm } from "./UncontrolledForm";
import { useState } from 'react';
import { ControlledModal } from "./ControlledModal";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
	<>
		<h1>Step 1</h1>
		<button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
	</>
);
const StepTwo = ({ goToNext }) => (
	<>
		<h1>Step 2</h1>
		<button onClick={() => goToNext({ age: 100 })}>Next</button>
	</>
);
const StepThree = ({ goToNext }) => (
	<>
		<h1>Step 3</h1>
		<button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
	</>
);

function App() {
	const [shouldShowModal, setShouldShowModal] = useState(false);
	return (
		<>
			<UncontrolledForm />
			<ControlledForm />
			{/* Modal is controlled because the parent controls his state and data */}
			<ControlledModal
				shouldShow={shouldShowModal}
				onRequestClose={() => setShouldShowModal(false)}
			>
				<h1>Hello!</h1>
			</ControlledModal>
			<button onClick={() => setShouldShowModal(!shouldShowModal)}>
				{shouldShowModal ? "Hide Modal" : "Show Modal"}
			</button>
			<UncontrolledOnboardingFlow onFinish={data => {
				console.log(data);
				alert('Onboarding complete!');
			}}>
				<StepOne />
				<StepTwo />
				<StepThree />
			</UncontrolledOnboardingFlow>
		</>
	)
}

export default App;