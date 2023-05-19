import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "./component/Login.jsx";

function App() {
  return createBrowserRouter(
    createRoutesFromElements(<Route path="/login" element={<Login />}></Route>)
  );
}

export default App;
