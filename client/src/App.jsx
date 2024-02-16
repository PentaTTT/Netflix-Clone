import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Watch from "./pages/Watch";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const currentUser = useSelector((state) => state.auth.login.currentUser);

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={currentUser ? <Home /> : <Navigate to={'/login'} replace />} />
          <Route path="/login" element={!currentUser ? <Login isRegister={false} /> : <Navigate to={'/'} replace />} />
          <Route path="/register" element={!currentUser ? <Login isRegister={true} /> : <Navigate to={'/'} replace />} />

          {currentUser && (
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
    </>

  )
};

export default App;