import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import {RenderForm} from "./Pages/RenderForm"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/:FormName" element={<RenderForm/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
