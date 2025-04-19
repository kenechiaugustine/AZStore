import React, { useRef, useState, useEffect, useCallback } from 'react';
import styles from './ScrollingProducts.module.css';
import { IScrollingProductsDto } from './interface';

const SCROLL_AMOUNT = 300;

interface ScrollingProductsProps {
  title: string;
  categoryName: string;
  seeMoreLink: string;
  isSeeMoreVisible?: boolean;
  productsData: IScrollingProductsDto[];
}

export default function ScrollingProducts({ title, categoryName, seeMoreLink, isSeeMoreVisible = true, productsData }: ScrollingProductsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth - 1);
    } else {
      setCanScrollLeft(false);
      setCanScrollRight(false);
    }
  }, []);

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [checkScrollability, productsData]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      return () => container.removeEventListener('scroll', checkScrollability);
    }
  }, [checkScrollability]);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollValue = direction === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
      container.scrollBy({
        left: scrollValue,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.scrollingProductsSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {isSeeMoreVisible && (
          <a href={seeMoreLink} className={styles.seeMoreLink}>
            See more
          </a>
        )}
      </div>

      <div className={styles.scrollWrapper}>
        <button
          className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
          onClick={() => handleScroll('left')}
          disabled={!canScrollLeft}
          aria-label="Scroll previous items"
        >
          ‹
        </button>

        <div className={styles.scrollContainer} ref={scrollContainerRef}>
          <div className={styles.productList}>
            {productsData.map((product: IScrollingProductsDto) => (
              <div key={product.id} className={styles.productItem}>
                <a href={product.productLink?.startsWith('http') ? product.productLink : 'https://placehold.co/90x100?text=no_image'}>
                  <img src={product.imageUrl} alt={product.productName} className={styles.productImage} loading="lazy" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
          onClick={() => handleScroll('right')}
          disabled={!canScrollRight}
          aria-label="Scroll next items"
        >
          ›
        </button>
      </div>
    </div>
  );
}
