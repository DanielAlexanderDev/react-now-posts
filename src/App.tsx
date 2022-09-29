import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "./context/authContext";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Create from "@/pages/Create";
import "./App.css";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Browse from "./pages/Browse";
import { UserProvider } from "./context/userContext";

function App() {
  const context = useContext(authContext);
  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={context?.isAuth ? <Navigate to={"/profile"} /> : <Login />}
          />
          <Route path="/explore" element={<Browse />} />
          <Route
            path="/register"
            element={
              context?.isAuth ? <Navigate to={"/profile"} /> : <Register />
            }
          />
          <Route path="/create" element={<Create />} />
          <Route
            path="/profile"
            element={context?.isAuth ? <Profile /> : <h1>Inicia Sesion</h1>}
          />
          <Route path="*" element={<>NOT FOUND</>} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
