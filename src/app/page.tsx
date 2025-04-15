'use client';
import { SidebarProvider } from '@/hooks/SidebarContext';
import styles from './page.module.css';
import Navigation from '@/components/Navigation/Navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';

const cookerImg = 'https://placehold.co/600x400';
const coffeeImg = 'https://placehold.co/100x75';
const potsPansImg = 'https://placehold.co/100x75';
const kettlesImg = 'https://placehold.co/100x75';

interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  footerLink?: string;
  footerText?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, children, footerLink, footerText }) => (
  <div className={styles.cardWrapper}>
    <h2 className={styles.cardTitle}>{title}</h2>
    <div className={styles.cardContent}>{children}</div>
    {footerLink && footerText && (
      <a href={footerLink} className={styles.cardFooterLink}>
        {footerText}
      </a>
    )}
  </div>
);

export default function HomePage() {
  return (
    <>
      <SidebarProvider>
        <Sidebar />
        <div>
          <Header />
          <Navigation />
          <main className={styles.main}>
            <div className={styles.ImageContainer}></div>
            <div className={styles.contentGrid}>
              <ContentCard title="Top categories in Kitchen appliances" footerLink="#" footerText="Explore all products in Kitchen">
                <div className={styles.kitchenLayout}>
                  <div className={styles.mainItem}>
                    <img src={cookerImg} alt="Cooker" className={styles.mainItemImg} />
                    <p className={styles.itemLabel}>Cooker</p>
                  </div>
                  <div className={styles.subItemsGrid}>
                    <div className={styles.subItem}>
                      <img src={coffeeImg} alt="Coffee Maker" className={styles.subItemImg} />
                      <p className={styles.itemLabel}>Coffee</p>
                    </div>
                    <div className={styles.subItem}>
                      <img src={potsPansImg} alt="Pots and Pans" className={styles.subItemImg} />
                      <p className={styles.itemLabel}>Pots and P...</p>
                    </div>
                    <div className={styles.subItem}>
                      <img src={kettlesImg} alt="Kettle" className={styles.subItemImg} />
                      <p className={styles.itemLabel}>Kettles</p>
                    </div>
                  </div>
                </div>
              </ContentCard>

              <ContentCard title="Top categories in Kitchen appliances" footerLink="#" footerText="Explore all products in Kitchen">
                <div className={styles.kitchenLayout}>
                  <div className={styles.mainItem}>
                    <img src={cookerImg} alt="Cooker" className={styles.mainItemImg} />
                    <p className={styles.itemLabel}>Cooker</p>
                  </div>
                  <div className={styles.subItemsGrid}>
                    <div className={styles.subItem}>
                      <img src={coffeeImg} alt="Coffee Maker" className={styles.subItemImg} />
                      <p className={styles.itemLabel}>Coffee</p>
                    </div>
                    <div className={styles.subItem}>
                      <img src={potsPansImg} alt="Pots and Pans" className={styles.subItemImg} />
                      <p className={styles.itemLabel}>Pots and P...</p>
                    </div>
                    <div className={styles.subItem}>
                      <img src={kettlesImg} alt="Kettle" className={styles.subItemImg} />
                      <p className={styles.itemLabel}>Kettles</p>
                    </div>
                  </div>
                </div>
              </ContentCard>
            </div>
          </main>
          <Footer />
        </div>
      </SidebarProvider>
    </>
  );
}
