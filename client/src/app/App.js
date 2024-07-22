import { ToastContainer } from "react-toastify";
import RouterRender from "../routers/routerRender";
import "../styles/index.scss";
function App() {
  return (
    <>
      <RouterRender />
      <ToastContainer />
    </>
  );
}

export default App;
