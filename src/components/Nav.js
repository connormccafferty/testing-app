import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link id="system-link" to={"/system"}>
                        System
                    </Link>
                </li>
                <li>
                    <Link id="application-link" to={"/application"}>
                        Application
                    </Link>
                </li>
                <li>
                    <Link id="window-link" to={"/window"}>
                        Window
                    </Link>
                </li>
                <li>
                    <Link id="layouts-link" to={"/layouts"}>
                        Layouts
                    </Link>
                </li>
                <li>
                    <Link id="notifications-link" to={"/notifications"}>
                        Notifications
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
