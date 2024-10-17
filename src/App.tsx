import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <UserList /> */}
      {/* <button className="bg-indigo-500 ...">Save changes</button> */}
    </>
  );
}

export default App;
