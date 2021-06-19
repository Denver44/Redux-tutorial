import { createPolicy, createClaim, deletePolicy } from "./Action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const action1 = createPolicy("Kevin", 20);
  const action2 = createPolicy("MaxWell", 20);
  const action3 = createPolicy("Root", 20);
  const action4 = createPolicy("Jason", 20);
  const action5 = createClaim("Root", 100);
  const action6 = deletePolicy("Jason");

  dispatch(action1);
  dispatch(action2);
  dispatch(action3);
  dispatch(action4);
  dispatch(action5);
  dispatch(action6);

  return <div>THIS IS BASIC REDUX TUTORIAL</div>;
}

export default App;
