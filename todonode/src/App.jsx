import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "./component/Login.jsx";
import TodolistPlayGround from "./component/todoplayground.jsx";

function App() {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/playground"
          loader={async () =>
            fetch("https://fakestoreapi.com/products/1")
              .then((res) => res.json())
              .then((json) => console.log(json))
          }
          element={TodolistPlayGround}
        />
      </Route>
    )
  );
}

export default App;
