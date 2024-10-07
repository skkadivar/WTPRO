import "./App.css";
import { Outlet } from "react-router-dom";
import Hednavbar from "./component/navbar";

function App() {
  return (
    <>
      <div className="position-sticky sticky-top">
        <Hednavbar />
      </div>
      <div className="mt-3 mx-5">
        <Outlet />
      </div>
    </>
  );
}

export default App;
