import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DogDetail from "./pages/DogDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perro/:slug" element={<DogDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
