import { Route, Routes, BrowserRouter } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
