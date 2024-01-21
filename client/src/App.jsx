import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Watch from "./pages/Watch";

const App = () => {
  const isLogin = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={isLogin ? <Home /> : <Navigate to={'/login'} replace />} />
        <Route path="/login" element={!isLogin ? <Login isRegister={false} /> : <Navigate to={'/'} replace />} />
        <Route path="/register" element={!isLogin ? <Login isRegister={true} /> : <Navigate to={'/'} replace />} />

        {isLogin && (
          <>
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )
        }

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter >
  )
};

export default App;