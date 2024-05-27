import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import NaoEncontrada from "./NaoEncontrada";
import Produto from "./Produto";
import Login from "./Login";
import Sobre from "./Sobre";

import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="login" element={<Login />} />
            <Route path="produto/:id" element={<Produto />}>
               <Route path="" element={<ProdutoDescricao />} />
               <Route path="avaliacao" element={<ProdutoAvaliacao />} />
               <Route path="customizado" element={<ProdutoCustomizado />} />
            </Route>
            <Route path="*" element={<NaoEncontrada />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
