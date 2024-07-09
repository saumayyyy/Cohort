import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Landing from "./Pages/Landing"
function App() {
  return (
    <div>
      <div>
        This is the Topbar.
        Whatever Component is placed above routes will be constant for all routes.
      </div>
      <BrowserRouter>
        <AppBar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/landing" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

function AppBar(){
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={()=>navigate("/landing")}>Landing Page</button>
      <button onClick={()=>navigate("/dashboard")}>Dashboard Page</button>
    </div>
  )
}
export default App
