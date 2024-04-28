import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Calculator } from "./components/Calculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/basic" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
