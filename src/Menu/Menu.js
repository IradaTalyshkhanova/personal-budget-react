import React from 'react';

//import react router https://reactrouter.com/web/guides/quick-start
import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav
        role="navigation"
        aria-label="Main Menu"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
        >
    <ul>
        <li><Link itemProp="url" to="/">Home</Link></li>
        <li><Link itemProp="url" to="/about">About</Link></li>
        <li><Link itemProp="url" to="/login">Login</Link></li>
    </ul>
</nav>
  );
}

export default Menu;
