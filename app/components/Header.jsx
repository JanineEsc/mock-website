'use client'

import Link from "next/link";
import styles from "../styles/Header.module.css";


export const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <li className={styles.li}>
          <Link href="/">HOME</Link>
          <Link href="/women">WOMEN</Link>
          <Link href="/men">MEN</Link>
          <Link href="/children">CHILDREN</Link>
          <Link href="/service"> SERVICE </Link>
        </li>
      </nav>
      <div>
        <div className={styles.imageContainer}>
          <img src="https://images.pexels.com/photos/16337970/pexels-photo-16337970/free-photo-of-woman-with-hat-sitting-in-cafe.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img src="https://images.pexels.com/photos/2873985/pexels-photo-2873985.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img src="https://images.pexels.com/photos/30334293/pexels-photo-30334293/free-photo-of-woman-in-fashionable-white-shirt-and-headscarf.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img src="https://images.pexels.com/photos/8091315/pexels-photo-8091315.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className={styles.textContainer}>
          <h1>WEAR</h1>
          <p>Find the latest trends and styles for every occasion.</p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  )
}
          
          