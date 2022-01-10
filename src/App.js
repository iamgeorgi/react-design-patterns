import { SplitScreen } from "./SplitScreen";

const LeftHandcomponent = ({ message }) => {
  return <h1 style={{ backgroundColor: 'green' }}>{message}</h1>
}

const RightHandcomponent = ({ message }) => {
  return <p style={{ backgroundColor: 'red' }}>{message}</p>
}

function App() {
  return (
      <SplitScreen 
      leftWeight={1}
      rightWeight={3} 
      >
        <LeftHandcomponent message="John" />
        <RightHandcomponent message="Shaun" />
      </SplitScreen>
  );
}

export default App;
