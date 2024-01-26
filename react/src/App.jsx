import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
 

function App() {

  
  return <BrowserRouter>
  <NavBar/>
  <Routes>
  <Route  path="/" element={<ItemListContainer />} />
  <Route path="/categoria/:categoria" element={<ItemListContainer />} />
  <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
  <Route path="*" element={<div>Sitio no encontrado por favor vuelva</div>} />
  </Routes>
  </BrowserRouter>;
}

export default App;
