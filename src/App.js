import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Error from "./components/Error";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />}></Route>
        <Route path="/:name" element={<SingleCountry />}></Route>
        {/* Ruta para todas aquellas url que no esten en nuestra pagina, muestra error */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
