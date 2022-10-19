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
  const { isAuth } = useContext(authContext);
  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={isAuth ? <Navigate to={"/profile"} /> : <Login />}
          />
          <Route path="/explore" element={<Browse />} />
          <Route
            path="/register"
            element={isAuth ? <Navigate to={"/profile"} /> : <Register />}
          />
          <Route
            path="/create"
            element={isAuth ? <Create /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/profile"
            element={isAuth ? <Profile /> : <Navigate to={"/login"} />}
          />
          <Route path="*" element={<>NOT FOUND</>} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
