import { useState } from "react";
import api from "../api/axiosConfig";
import { Link, replace, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await api.post(
        "/api/auth/login",
        new URLSearchParams({ userId, password })
      );

      const res = await api.get("/api/auth/me");
      onLogin(res.data.userId);
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
      alert("잘못된 아이디 또는 비밀번호 입니다.");
    }
  };
  return (
    <div>
      <div>
        <div>FM26</div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={userId}
            placeholder="아이디"
            onChange={(e) => setUserId(e.target.value)}
          ></input>
          <input
            type="password"
            value={password}
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">로그인</button>
          <Link to="/signup">회원가입</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
