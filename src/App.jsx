import ToDoDashboard from "./components/Landing"
import {NextUIProvider} from "@nextui-org/react";
function App() {

  return (
    <div>
    <NextUIProvider>
      <ToDoDashboard/>
    </NextUIProvider>
    
    </div>
  )
}

export default App
