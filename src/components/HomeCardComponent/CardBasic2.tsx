import styles from './Card.module.css';

interface ContentCardBasicProps {
  children?: React.ReactNode;
  title: string;
  footerLink?: string;
  footerText?: string;
  images: string[];
  labels: string[];
}

// This card is the one that has main image and 3x3 grid layout
export default function ContentCardBasic2({ title, children, footerLink, footerText, images, labels }: ContentCardBasicProps) {
  return (
    <>
      <div className={styles.cardWrapper}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.cardContent}>
          <div className={styles.cardBasic2Layout}>
            <div className={styles.mainItem}>
              <img src={images[0]} alt={labels[0]} className={styles.mainItemImg} />
              <p className={styles.itemLabel}>{labels[0]}</p>
            </div>
            <div className={styles.subItemsGrid}>
              <div className={styles.subItem}>
                <img src={images[1]} alt={labels[1]} className={styles.subItemImg} />
                <p className={styles.itemLabel}>{labels[1]}</p>
              </div>
              <div className={styles.subItem}>
                <img src={images[2]} alt={labels[2]} className={styles.subItemImg} />
                <p className={styles.itemLabel}>{labels[2]}</p>
              </div>
              <div className={styles.subItem}>
                <img src={images[3]} alt={labels[3]} className={styles.subItemImg} />
                <p className={styles.itemLabel}>{labels[3]}</p>
              </div>
            </div>
          </div>
        </div>
        {footerLink && footerText && (
          <a href={footerLink} className={styles.cardFooterLink}>
            {footerText}
          </a>
        )}
      </div>
    </>
  );
}
