import React from "react";
import { Link } from "react-router-dom";

const links = ["system", "application", "window", "layouts", "notifications"];

const Nav = () => {
    return (
        <nav>
            <ul>
                {links.map(link => (
                    <li key={links.indexOf(link)}>
                        <Link id={`${link}-link`} to={`/${link}`}>
                            {link[0].toUpperCase() + link.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
