import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/Home/ProductDetails";
import Reviews from "./Pages/Home/Reviews";
import Services from "./Pages/Home/Services";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import NotFound from "./Pages/NotFound";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/review" element={<Reviews></Reviews>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/product" element={<Services></Services>}></Route>
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
