// src/components/ProductCard.tsx
import React from 'react';
import styles from './ProductCard.module.css';
import { IProduct } from '@/types/interface';

interface ProductCardProps {
  product: IProduct;
}

// Helper function (remains the same)
const renderRatingStars = (rating: number): string => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  return '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  return (
    // Use styles object for class names
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img src={product.imageUrl} alt={product.title.substring(0, 50)} className={styles.productImage} />
      </div>
      <div className={styles.productDetails}>
        <a href="#" className={styles.productTitle}>
          {product.title}
        </a>

        <div className={styles.productRating}>
          <span className={styles.stars}>{renderRatingStars(product.rating as number)}</span>
          <span className={styles.reviewCount}>{product.reviewCount ? product.reviewCount.toLocaleString() : 0}</span>
        </div>

        {/* Combine classes using template literals if needed */}
        {product.isAmazonChoice && <span className={`${styles.badge} ${styles.amazonChoice}`}>Amazon's Choice</span>}
        {product.isLimitedTimeDeal && product.discountPercentage && (
          <div className={styles.dealBadge}>
            {' '}
            {/* Use dealBadge directly */}
            <span className={styles.discountPercentage}>{product.discountPercentage}% off</span>
            <span className={styles.dealText}>Limited time deal</span>
          </div>
        )}

        <div className={styles.productPriceSection}>
          <span className={styles.currentPrice}>{formatPrice(product.price ? product.price : 0)}</span>
          {product.listPrice && (
            <span className={styles.listPrice}>
              List: <span className={styles.strikethrough}>{formatPrice(product.listPrice)}</span>
            </span>
          )}
        </div>

        <p className={styles.deliveryInfo}>{product.deliveryDate}</p>
        <p className={styles.shippingInfo}>
          {product.shippingCost === 0 ? 'FREE Shipping' : `${formatPrice(product.shippingCost as number)} shipping`}
        </p>

        {product.stockMessage && <p className={styles.stockInfo}>{product.stockMessage}</p>}
        {product.hasSustainabilityFeature && <p className={styles.sustainabilityInfo}>🌱 1 sustainability feature</p>}
      </div>
    </div>
  );
};

export default ProductCard;
