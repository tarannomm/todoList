import ToDoDashboard from "./components/Landing";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="font-roboto">
      <NextUIProvider>
        <ToDoDashboard />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={false}
          theme="colored"
        />
      </NextUIProvider>
    </div>
  );
}

export default App;
