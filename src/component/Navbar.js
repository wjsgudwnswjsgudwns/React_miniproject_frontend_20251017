import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/">FM26</Link>
      <div>
        <Link to="/login">로그인</Link>
      </div>
    </nav>
  );
}

export default Navbar;
