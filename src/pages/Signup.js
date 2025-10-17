import { useState } from "react";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      await api.post("/api/auth/signup", {
        userId,
        password,
        email,
        phone,
        passwordCheck,
      });
      alert("회원 가입 성공");
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setErrors(err.response.data);
      } else {
        console.error("회원가입실패 : ", err);
        alert("회원 가입 실패");
      }
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="비밀번호 확인"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="핸드폰 번호"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>

        {errors.userId && <p style={{ color: "red" }}>{errors.userId}</p>}
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        {errors.iderror && <p style={{ color: "red" }}>{errors.iderror}</p>}

        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Signup;
