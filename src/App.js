//Resources
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import MainPage from "./pages/MainPage";
import FormPage from "./pages/FormPage/FormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add-vehicle" element={<FormPage />} />
        <Route path="/edit-vehicle/:id" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
