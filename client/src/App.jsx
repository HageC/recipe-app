import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./components";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
