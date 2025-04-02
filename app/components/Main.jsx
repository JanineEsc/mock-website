'use client'

import Link from "next/link";
import styles from "../styles/Main.module.css";

export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* Each product should be its own card directly in the container */}
        <div className={styles.card}>
        <Link href="/productOne"> 
            <div>
              <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D" alt="t-shirt" />
              <h2>Red cocktail Dress</h2>
              <p>Price: <strong>500 SEK</strong></p>
            </div>
          </Link>
        </div>
        
        <div className={styles.card}>
          <Link href="/ProductTwo">
            <div>
              <img src="https://plus.unsplash.com/premium_photo-1673964714709-05e0c1a3a745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRyZXNzfGVufDB8fDB8fHww" alt="t-shirt" />
              <h2>Black long dress</h2>
              <p>Price: <strong>799 SEK</strong></p>
            </div>
          </Link>
        </div>
        
        <div className={styles.card}>
          <Link href="/ProductThree">
            <div>
              <img src="https://plus.unsplash.com/premium_photo-1702226631942-921d35d4183a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGJsYWNrJTIwaGVlbHN8ZW58MHx8MHx8fDA%3D" alt="t-shirt" />
              <h2>Red High heels </h2>
              <p>Price: <strong>379 SEK</strong></p>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.container1}>
        {/* Each product should be its own card directly in the container */}
        <div className={styles.card1}>
          <Link href="/ProductFour">
            <div>
              <img src="https://images.unsplash.com/photo-1635585341452-303feac08778?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGJsYWNrJTIwaGVlbHN8ZW58MHx8MHx8fDA%3D" alt="t-shirt" />
              <h2>Black dress</h2>
              <p>Price: <strong>500 SEK</strong></p>
            </div>
          </Link>
        </div>
        
        <div className={styles.card1}>
          <Link href="/ProductFive">
            <div>
              <img src="https://images.unsplash.com/photo-1643616964756-7e2822e38ee9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGJsYWNrJTIwaGVlbHN8ZW58MHx8MHx8fDA%3D" alt="t-shirt" />
              <h2>Black midi skirt </h2>
              <p>Price: <strong>780 SEK</strong></p>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        {/* Each product should be its own card directly in the container */}
        <div className={styles.card}>
          <Link href="/ProductSix">
            <div>
              <img src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww" alt="t-shirt" />
              <h2>White T-shirt </h2>
              <p>Price: <strong>500 SEK</strong></p>
            </div>
          </Link>
        </div>
        
        <div className={styles.card}>
          <Link href="/ProductSeven">
            <div>
              <img src="https://plus.unsplash.com/premium_photo-1689371953420-b6981e43fa38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGplYW5zfGVufDB8fDB8fHww" alt="t-shirt" />
              <h2> Jeans </h2>
              <p>Price: <strong> 489 SEK</strong></p>
            </div>
          </Link>
        </div>
        
        <div className={styles.card}>
          <Link href="/ProductEight">
            <div>
              <img src="https://images.unsplash.com/photo-1542295669297-4d352b042bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VtbWVyJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="t-shirt" />
              <h2>Flower Dress </h2>
              <p>Price: <strong>400 SEK</strong></p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
        






