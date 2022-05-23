import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import NotFound from "./Pages/NotFound";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="px-12">
     <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/signup" element={<SignUp></SignUp>}></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
