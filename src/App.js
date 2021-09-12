import { createPolicy, createClaim, deletePolicy } from "./Action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const createMyPolicy = () => {
    const name = window.prompt("Enter Your Name : ")
    const amount = window.prompt("Enter Amount to start your policy : ")
    dispatch(createPolicy(name, amount))
    window.alert('Your Policy is Created')
  }
  const claimMyPolicy = () => {
    const name = window.prompt("Enter Your Name : ")
    const amount = window.prompt("Enter the amount u want to claim : ")
    dispatch(createClaim(name, amount))
    window.alert('You claim is successful')
  }
  const deleteMyPolicy = () => {
    const name = window.prompt("Enter Your Name : ")
    dispatch(deletePolicy(name))
    window.alert('Your Policy discarded')
  }

  return (
    <>
      <button onClick={createMyPolicy}>createPolicy</button>
      <button onClick={claimMyPolicy}>createClaim</button>
      <button onClick={deleteMyPolicy}>deletePolicy</button>
    </>
  );
}

export default App;
