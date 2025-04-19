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
import ScrollingProducts from '@/components/ScrollingProducts/ScrollingProducts';
import { scrollingProductsSampleData } from '../data/scrollingProductsSample';

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

            <ScrollingProducts
              title="Based on your searched results"
              categoryName="Jeans"
              seeMoreLink="#"
              // isSeeMoreVisible={false}
              productsData={scrollingProductsSampleData}
            />

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

            <ScrollingProducts
              title="Based on your searched results"
              categoryName="Jeans"
              seeMoreLink="#"
              isSeeMoreVisible={false}
              productsData={scrollingProductsSampleData}
            />

            <ScrollingProducts
              title="Based on your searched results"
              categoryName="Jeans"
              seeMoreLink="#"
              // isSeeMoreVisible={false}
              productsData={scrollingProductsSampleData}
            />

            <div className={styles.signInRecommendationContainer}>
              <div className={styles.signInRecommendationContent}>
                <h1>See personalized recommendations</h1>
                <a className={styles.signInRecommendationLink} href="#">
                  Sign In
                </a>
                <p>
                  New customer? <a href="#">Start here.</a>
                </p>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </SidebarProvider>
    </>
  );
}
