import { Routes , Route} from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import Vegetables from  "./pages/Vegetables"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route exact path='/'  element={<Home/>}  />

    {/* login routes  */}
    <Route exact path='/login'  element={<Login/>}  />


    {/* products */}

    <Route exact path="/Vegetables" element={<Vegetables/>} />

   
    </Routes>
    <Footer />
    </>
    
  );
}

export default App;
