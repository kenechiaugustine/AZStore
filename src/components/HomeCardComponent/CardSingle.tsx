import styles from './Card.module.css';

interface ContentCardBasicProps {
  children?: React.ReactNode;
  title: string;
  footerLink?: string;
  footerText?: string;
  images: string[];
  labels: string[];
}

// This card is the single image card
export default function ContentCardSingle({ title, children, footerLink, footerText, images, labels }: ContentCardBasicProps) {
  return (
    <>
      <div className={styles.cardWrapper}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.cardContent}>
          <div className={styles.singleImageLayout}>
            <img src={images[0]} alt={labels ? labels[0] : ''} className={styles.singleImg} />
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
