import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watch from "./pages/Watch";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/watch" element={<Watch />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
};

export default App;