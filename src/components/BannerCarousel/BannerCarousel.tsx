import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import styles from './BannerCarousel.module.css';

interface CarouselItem {
  id: string | number;
  src: string;
  color: string;
  url?: string;
}

interface BannerCarouselProps {
  items: CarouselItem[];
  autoScrollInterval?: number;
  carouselTitle?: string; 
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ items, autoScrollInterval = 5000, carouselTitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    // Only start timer if there are multiple items
    if (items.length > 1) {
      resetTimeout();
      timeoutRef.current = setTimeout(goToNext, autoScrollInterval);
    }

    return () => {
      resetTimeout();
    };
    // Ensure items.length is a dependency if the number of items can change dynamically
  }, [activeIndex, autoScrollInterval, items.length, goToNext, resetTimeout]);

  const handleNavClick = (direction: 'prev' | 'next') => {
    resetTimeout();
    if (direction === 'prev') {
      goToPrev();
    } else {
      goToNext();
    }
    // Restart timer immediately after manual navigation if desired
    if (items.length > 1) {
      timeoutRef.current = setTimeout(goToNext, autoScrollInterval);
    }
  };

  if (!items || items.length === 0) {
    return <div>No items to display.</div>;
  }

  const currentBgColor = items[activeIndex]?.color || '#f0f0f0'; // Fallback color

  return (
    <div className={styles.topBanner}>
      <div
        className={styles.carouselContainer}
        style={{ '--carousel-bg-color': currentBgColor } as React.CSSProperties}
        onMouseEnter={resetTimeout}
        onMouseLeave={() => {
          if (items.length > 1) {
            timeoutRef.current = setTimeout(goToNext, autoScrollInterval);
          }
        }}
      >
        <div className={styles.itemsWrapper} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {items.map((item) => (
            <div className={styles.item} key={item.id}>
              <a className={styles.imgContainer} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Link for slide ${item.id}`}>
                <img className={styles.imgContainer} src={item.src} alt={`Slide ${item.id}`} />
              </a>
            </div>
          ))}
        </div>

        {items.length > 1 && (
          <>
            <button className={`${styles.navButton} ${styles.prevButton}`} onClick={() => handleNavClick('prev')} aria-label="Previous Slide">
              ‹
            </button>
            <button className={`${styles.navButton} ${styles.nextButton}`} onClick={() => handleNavClick('next')} aria-label="Next Slide">
              ›
            </button>
          </>
        )}
      </div>
      <div className={styles.blendColor} style={{ background: `linear-gradient(${currentBgColor}, #e3e6e6)` }}></div>
    </div>
  );
};

export default BannerCarousel;
