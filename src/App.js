import { Routes , Route} from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route exact path='/'  element={<Home/>}  />

    </Routes>
    <Footer />
    </>
    
  );
}

export default App;
