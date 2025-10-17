import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import api from "./api/axiosConfig";

function App() {
  const [user, setUser] = useState(null); // 현재 로그인한 유저의 이름

  const checkUser = async () => {
    try {
      const res = await api.get("/api/auth/me");
      setUser(res.data.username);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login onLogin={setUser} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
