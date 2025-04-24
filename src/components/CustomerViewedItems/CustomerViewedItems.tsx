import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import styles from './CustomerViewedItems.module.css';
import { customerViewedItemsProductSampleData } from '@/data/customerViewedProductSample';
import { getItemsPerPageForWidth } from '@/utils/helper';
import { IProduct } from '@/types/interface';

interface CustomerViewedItemsProps {
  title: string;
  productsData: IProduct[];
}

export default function CustomerViewedItems() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(0);

  const products: IProduct[] = customerViewedItemsProductSampleData; // remove later
  const totalItems = products.length;

  useEffect(() => {
    const updateItemsBasedOnWidth = () => {
      const currentWidth = window.innerWidth;
      setItemsPerPage(getItemsPerPageForWidth(currentWidth));
    };
    updateItemsBasedOnWidth();
    window.addEventListener('resize', updateItemsBasedOnWidth);
    return () => {
      window.removeEventListener('resize', updateItemsBasedOnWidth);
    };
  }, []);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    } else if (totalPages === 1 && currentPage !== 1) {
      setCurrentPage(1);
    } else if (totalPages === 0) {
      setCurrentPage(1);
    }
  }, [totalPages]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = products.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className={styles.customerViewedContainer}>
      <div className={styles.header}>
        <h2>Customers who viewed items in your browsing history also viewed</h2>
        {totalPages > 1 && (
          <span className={styles.pageIndicator}>
            Page {currentPage} of {totalPages}
          </span>
        )}
      </div>

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={handlePrevPage}
          disabled={currentPage === 1 || totalItems === 0}
          aria-label="Previous page"
        >
          ‹
        </button>

        <div className={styles.productListContainer}>
          <div className={styles.productList} key={`page-${currentPage}-items-${itemsPerPage}`}>
            {currentItems.length > 0 ? (
              currentItems.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
              <p>{totalItems === 0 ? 'No items available.' : 'Loading items...'}</p>
            )}
          </div>
        </div>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages || totalItems === 0}
          aria-label="Next page"
        >
          ›
        </button>
      </div>
    </div>
  );
}
