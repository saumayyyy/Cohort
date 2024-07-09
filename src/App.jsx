import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";

import Landing from "./Pages/Landing"
import { Suspense } from "react";

const Dashboard = React.lazy(()=>import("./Pages/Dashboard"));
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
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
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
