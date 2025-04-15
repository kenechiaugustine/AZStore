'use client';
import { SidebarProvider } from '@/hooks/SidebarContext';
import styles from './page.module.css';
import Navigation from '@/components/Navigation/Navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';
import ContentCardBasic from '@/components/HomeCardComponent/CardBasic';
import ContentCardSingle from '@/components/HomeCardComponent/CardSingle';
import ContentCardBasic2 from '@/components/HomeCardComponent/CardBasic2';

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
              <ContentCardBasic
                title="Shop deals"
                footerLink="#"
                footerText="See all deals"
                labels={['Jeans under $50', 'Tops under $25', 'Dresses under $30', 'Shoes under $50']}
                images={['https://placehold.co/100x75', 'https://placehold.co/100x75', 'https://placehold.co/100x75', 'https://placehold.co/100x75']}
              />

              <ContentCardSingle
                title="Some gaming items"
                footerLink="#"
                footerText="See all deals"
                images={['https://placehold.co/100x75']}
                labels={['Jeans under $50']}
              />

              {Array.from({ length: 2 }, (_, index) => (
                <ContentCardBasic
                  title="Shop deals"
                  footerLink="#"
                  footerText="See all deals"
                  labels={['Jeans under $50', 'Tops under $25', 'Dresses under $30', 'Shoes under $50']}
                  images={[
                    'https://placehold.co/100x75',
                    'https://placehold.co/100x75',
                    'https://placehold.co/100x75',
                    'https://placehold.co/100x75',
                  ]}
                />
              ))}

              <ContentCardBasic2
                title="Yo top stuff here. Look no further, we gat u"
                footerLink="#"
                footerText="See all deals"
                labels={['Jeans under $50', 'Tops under $25', 'Dresses under $30', 'Shoes under $50']}
                images={['https://placehold.co/100x75', 'https://placehold.co/100x75', 'https://placehold.co/100x75', 'https://placehold.co/100x75']}
              />

              <ContentCardBasic
                title="Shop deals"
                footerLink="#"
                footerText="See all deals"
                labels={['Jeans under $50', 'Tops under $25', 'Dresses under $30', 'Shoes under $50']}
                images={['https://placehold.co/100x75', 'https://placehold.co/100x75', 'https://placehold.co/100x75', 'https://placehold.co/100x75']}
              />

              <ContentCardSingle
                title="Some gaming items"
                footerLink="#"
                footerText="See all deals"
                images={['https://placehold.co/100x75']}
                labels={['Jeans under $50']}
              />

              <ContentCardBasic
                title="Shop deals"
                footerLink="#"
                footerText="See all deals"
                labels={['Jeans under $50', 'Tops under $25', 'Dresses under $30', 'Shoes under $50']}
                images={['https://placehold.co/100x75', 'https://placehold.co/100x75', 'https://placehold.co/100x75', 'https://placehold.co/100x75']}
              />
            </div>
          </main>
          <Footer />
        </div>
      </SidebarProvider>
    </>
  );
}
