
import { BrowserRouter, Routes, Route } from "react-router"
import { FormVulne } from "./pages/FormVulne"
import { FormSocio } from "./pages/FormSocio"

function App() {

  return (

    
    <BrowserRouter>

      <Routes>
        <Route path="/vulnerabilidad" element={<FormVulne />} />
        <Route path="/socioeconomico" element={<FormSocio />} />
      </Routes>
      
    </BrowserRouter>

      
  )
}

export default App
