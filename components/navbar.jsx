import React from "react";
import Link from 'next/link'
import Styles from './navbar.module.css';

const NavBar = () => (
    <ul className={Styles.container}>
        <li className={Styles.item}><Link href="/"><a>Home</a></Link><div></div></li>
        <li className={Styles.item}><Link href="/details"><a>Details</a></Link><div></div></li>
        <li className={Styles.item}><Link href="/portfolio/main"><a>portfolio</a></Link><div></div></li>
        <li className={Styles.item}><Link href="/tech"><a>TechStack</a></Link><div></div></li>
    </ul>
)

export default NavBar;