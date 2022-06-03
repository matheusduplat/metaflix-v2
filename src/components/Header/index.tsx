import { useEffect, useState } from "react";
import "./style.css";
export default function Header() {
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const scrollListerner = () => {
      if (window.scrollY > 20) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListerner);
    return () => {
      window.removeEventListener("scroll", scrollListerner);
    };
  }, []);
  return (
    <header className={blackHeader ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="usuario"
          />
        </a>
      </div>
    </header>
  );
}
