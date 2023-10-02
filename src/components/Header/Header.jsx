import React from "react";

const Menu1 = ({ link, children }) =>
    <li class="menu-item">
        <a href={link}>{children}</a>
    </li>

const Menu2 = ({ link, children }) => 
    <li class="menu-nav">
        <a href={link}>{children}</a>
    </li>

const Header = () => {
    return <header>
        <a href="#"><img id="logo" src="a-level-ukraine-logo.png" alt="" /></a>
        <nav class="main-nav">
            <input id="menu-toggle" type="checkbox" />
            <label class="menu-btn" for="menu-toggle">
                <span></span>
            </label>
            <ul class="menu-box">
                <Menu1 link="Home">Home</Menu1>
                <Menu1 link="Contacts">Contacts</Menu1>
                <Menu1 link="Our_team">Our team</Menu1>
                <Menu1 link="About_us">About us</Menu1>
                <Menu1 link="News">News</Menu1>
            </ul>

            <ul class="navigation">
                <Menu2 link="#">Home</Menu2>
                <Menu2 link="#">Contacts</Menu2>
                <Menu2 link="#">Our team</Menu2>
                <Menu2 link="#">About us</Menu2>
                <Menu2 link="#">News</Menu2>
            </ul>
        </nav>
    </header>
}

export default Header;

