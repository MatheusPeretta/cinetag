import Favoritos from "pages/Favoritos";
import Rodape from "./components/Rodape";
import Inicio from "./pages/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import FavoritosProvider from "contextos/Favoritos";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";
import PagBase from "pages/PagBase";

function AppRoutes() {
    return(
        <BrowserRouter>
           
                <Routes>
                    <Route path="/" element={<PagBase />}>
                        <Route index element={<Inicio/>}></Route>
                        <Route path="favoritos" element={<Favoritos/>}></Route>
                        <Route path=":id" element={<Player/>}></Route>
                        <Route path="*" element={<NaoEncontrada/>}></Route>
                    </Route>
                </Routes>
               
        </BrowserRouter>
    )
}

export default AppRoutes;
