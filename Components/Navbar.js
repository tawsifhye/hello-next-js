import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar_container}>
            <div className={styles.logo}><Link href='/'>LOGO</Link></div>
            <ul className={styles.nav_links}>
                <li> <Link href='/'>Home</Link></li>
                <li> <Link href='/blogs'>Blogs</Link></li>
                <li> <Link href='/products'>Products</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;