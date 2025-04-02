import Link from "next/link";
import styles from "../styles/Navbar.module.css";


export const Navbar = () => {
  return (
       <nav className={styles.nav}>
        <li className={styles.li}>
          <Link href="/">HOME</Link>
          <Link href="/women">WOMEN</Link>
          <Link href="/men">MEN</Link>
          <Link href="/children">CHILDREN</Link>
          <Link href="/service"> SERVICE </Link>
        </li>
    </nav>
  )
}