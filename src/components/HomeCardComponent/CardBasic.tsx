import styles from './Card.module.css';

interface ContentCardBasicProps {
  children?: React.ReactNode;
  title: string;
  footerLink?: string;
  footerText?: string;
  images: string[];
  labels: string[];
}

// This card is the one of 2x2 grid layout
export default function ContentCardBasic({ title, children, footerLink, footerText, images, labels }: ContentCardBasicProps) {
  return (
    <>
      <div className={styles.cardWrapper}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.cardContent}>
          <div className={styles.gridLayout2x2}>
            {Array.from(images || []).map((_, index) => (
              <div className={styles.gridItem}>
                <img src={images[index]} alt={labels ? labels[index] : ''} className={styles.gridItemImg} />
                <p className={styles.itemLabel}>{labels ? labels[index] : ''}</p>
              </div>
            ))}
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
