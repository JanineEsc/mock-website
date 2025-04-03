'use client'

import Link from 'next/link';
import { useState } from 'react';
import styles from '../../../styles/productThreeDetail.module.css';
import { Footer } from '@/app/components/Footer';
import { Navbar } from '@/app/components/Navbar';




const productThreeDetail = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  
  return (
    <div>
      <Navbar />
      <div className={styles.productPage}>
        <div className={styles.productThreeContainer}>
          <div className={styles.imageSection}>
            <div className={styles.mainImage}>
              <img 
                src="https://plus.unsplash.com/premium_photo-1702226631942-921d35d4183a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGJsYWNrJTIwaGVlbHN8ZW58MHx8MHx8fDA%3D"   
                alt="Red cocktail Dress" 
              />
            </div>

          </div>
          <div className={styles.productInfo}>
            <h1> Black Maxi Dress</h1>
            <p className={styles.price}> 799SEK</p>
            
            <div className={styles.description}>
              <p>This stunning black maxi dress is perfect for special occasions and evening events. Made with high-quality fabric that provides both comfort and elegant drape.</p>
              <p>The dress features a classic silhouette that flatters all body types.</p>
              
              <ul>
                <li>Premium fabric composition</li>
                <li>Elegant design with timeless appeal</li>
                <li>Comfortable fit for all-evening wear</li>
                <li>Hand washable</li>
              </ul>
            </div>
          
            
            <div className={styles.sizeSelector}>
              <h3>Select Size</h3>
              <div className={styles.sizeOptions}>
                <button 
                  className={selectedSize === 'XS' ? styles.selected : ''} 
                  onClick={() => setSelectedSize('XS')}
                >
                  XS
                </button>
                <button 
                  className={selectedSize === 'S' ? styles.selected : ''} 
                  onClick={() => setSelectedSize('S')}
                >
                  S
                </button>
                <button 
                  className={selectedSize === 'M' ? styles.selected : ''} 
                  onClick={() => setSelectedSize('M')}
                >
                  M
                </button>
                <button 
                  className={selectedSize === 'L' ? styles.selected : ''} 
                  onClick={() => setSelectedSize('L')}
                >
                  L
                </button>
                <button 
                  className={selectedSize === 'XL' ? styles.selected : ''} 
                  onClick={() => setSelectedSize('XL')}
                >
                  XL
                </button>
              </div>
            </div>
            
            <button className={styles.addToCartBtn}>Add to Cart</button>
          </div>
        </div>
      </div>
     
      <div className={styles.recommendedSection}>
        <h2>You May Also Like</h2>
        <div className={styles.recommendedContainer}>
          <div className={styles.recommendedCard}>
            <Link href="/ProductSix">
              <div>
                <img src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww" alt="t-shirt" />
                <h2>White T-shirt </h2>
                <p>Price: <strong>500 SEK</strong></p>
              </div>
            </Link>
          </div>
          
          <div className={styles.recommendedCard}>
            <Link href="/ProductSeven">
              <div>
                <img src="https://plus.unsplash.com/premium_photo-1689371953420-b6981e43fa38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGplYW5zfGVufDB8fDB8fHww" alt="t-shirt" />
                <h2>Jeans</h2>
                <p>Price: <strong>489 SEK</strong></p>
              </div>
            </Link>
          </div>
          
          <div className={styles.recommendedCard}>
            <Link href="/ProductEight">
              <div>
                <img src="https://images.unsplash.com/photo-1542295669297-4d352b042bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VtbWVyJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="t-shirt" />
                <h2>Flower Dress</h2>
                <p>Price: <strong>400 SEK</strong></p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default productThreeDetail;