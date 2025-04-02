import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerSection}>
          <h3>Shop</h3>
          <ul>
            <li><Link href="/women">Women</Link></li>
            <li><Link href="/men">Men</Link></li>
            <li><Link href="/children">Children</Link></li>
            <li><Link href="/accessories">Accessories</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Information</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/shipping">Shipping & Returns</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Connect With Us</h3>
          <div className={styles.social}>
            <Link href="https://instagram.com" className={styles.socialIcon}>Instagram</Link>
            <Link href="https://facebook.com" className={styles.socialIcon}>Facebook</Link>
            <Link href="https://twitter.com" className={styles.socialIcon}>Twitter</Link>
          </div>
          <div className={styles.newsletter}>
            <h4>Sign up for our newsletter</h4>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2025 WEAR. All rights reserved.</p>
      </div>
    </footer>
  );
};