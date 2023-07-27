import "./assets/SCSS/index.scss";
import "antd/dist/antd.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppRoutes from "./Routes";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer closeOnClick autoClose={5000} />
    </div>
  );
}

export default App;
