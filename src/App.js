import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Pokedetail } from "./pages/Poke-detail/Poke-detail";
import Items from "./pages/Items/Items";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar /> 
        <Menu />
        <Routes>
        <Route index path="/home" element={<Home />} />
        <Route index path="/detail" element={<Pokedetail />} />
        <Route index path="/items" element={<Items />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
