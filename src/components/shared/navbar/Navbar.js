import "./Navbar.css";

import Link from "next/link";
import { useState } from "react";

import links from "./links";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (event) => {
    if (window.innerWidth <= 700 && event.target.tagName === "A") {
      setShowMenu(false);
    }
  };

  return (
    <header onClick={handleClick}>
        <nav>
            <div className="navigation">
            <div className="nav-header">
                <Link href="/">
                    <img src={"/shared/logo.webp"} alt="" />
                </Link>
                <button onClick={() => setShowMenu(!showMenu)}>
                    <GiHamburgerMenu className="hamburger-icon" />
                </button>
            </div>
            <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
                <ul>
                {links
                    .filter((oneLink) => oneLink.show === true)
                    .map((oneLink) => {
                    const { id, text, url, img } = oneLink;

                    return (
                        <li key={id}>
                        <a
                            href={url}
                        >
                            <img src={img} alt="" className="nav-icon" />
                            {text}
                        </a>
                        </li>
                    );
                    })}
                </ul>
            </div>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;