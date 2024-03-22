import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";
import { PostPage } from "../pages/PostPage";
import { ErrorPage } from "../pages/ErrorPage";

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/contact" element={<ContactPage />} />
         <Route path="/post/:id" element={<PostPage />} />
         <Route path="*" element={<ErrorPage />} />
      </Routes>
   );
};

// a página de rotas tem todas as páginas importadas, e usa as dependencias: "Route, Routes" do "react-router-dom"
//Routes é a tag geral e Route tem a rota do link, o path tem o endereço que será adicionado ao endereço base
//e element tem o lugar que será renderizado quando o endereço for igual ao path
// é necessário fazer uma mudança no "main.jsx" pra fazer funcionar as rotas