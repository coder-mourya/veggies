import { Routes , Route} from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import Vegetables from  "./pages/Vegetables";
import Verification from "./components/Login/Verify";
import Register from "./components/Login/Register";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route exact path='/'  element={<Home/>}  />

    {/* login routes  */}
    <Route exact path='/login'  element={<Login/>}  />
    <Route exact path="/Verification" element={<Verification />} />

    {/* products */}

    <Route exact path="/Vegetables" element={<Vegetables/>} />
    <Route exact path="/Register" element={<Register />} />
   
    </Routes>
    <Footer />
    </>
    
  );
}

export default App;
