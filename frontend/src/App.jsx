
import { BrowserRouter } from "react-router"
import { FormHeader } from "./components/FormHeader"
import { FormVulne } from "./components/FormVulne"

function App() {

  return (
    <div className="form-background bg-light-main min-h-lvh min-w-vw pt-5">
      
      <div className="form-container bg-white w-8/12 p-4 rounded-2xl shadow-md">

        <FormHeader />

        <BrowserRouter>
          <FormVulne />
        </BrowserRouter>

      </div>
      
    </div>
  )
}

export default App
