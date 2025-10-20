import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user, onLogout }) {
  return (
    <nav>
      <Link to="/">FM26</Link>
      <div>
        {!user && <Link to="/login">로그인</Link>}
        {user && <Link to="/board">게시판</Link>}
        {user && (
          <button className="logout-btn" onClick={onLogout}>
            로그아웃
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
