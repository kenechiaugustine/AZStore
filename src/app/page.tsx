'use client';
import styles from './page.module.css';
import Navigation from '@/components/Navigation/Navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';
import ContentCardBasic from '@/components/HomeCardComponent/CardBasic';
import ContentCardSingle from '@/components/HomeCardComponent/CardSingle';
import ContentCardBasic2 from '@/components/HomeCardComponent/CardBasic2';
import ScrollingProducts from '@/components/ScrollingProducts/ScrollingProducts';
import CustomerViewedItems from '@/components/CustomerViewedItems/CustomerViewedItems';
import SignInRecommendation from '@/components/SignInRecommendation/SignInRecommendation';
import { scrollingProductsSampleData } from '../data/scrollingProductsSample';
import BannerCarousel from '@/components/BannerCarousel/BannerCarousel';

export default function HomePage() {
  const carouselItems = [
    {
      id: 1,
      src: 'https://m.media-amazon.com/images/I/61A-FJoXloL._SX3000_.jpg',
      color: '#ef93fe',
      url: 'https://example.com/new-arrivals',
    },
    {
      id: 2,
      src: 'https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg',
      color: '#ffd004',
      url: 'https://example.com/new-arrivals',
    },
    {
      id: 3,
      src: 'https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg',
      color: '#fed2c7',
      url: 'https://example.com/mothers-day-category-1',
    },
    {
      id: 4,
      src: 'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg',
      color: '#bae0b7',
      url: 'https://example.com/special-offers',
    },
  ];

  return (
    <>
      <Sidebar />
      <div>
        <Header />
        <Navigation />

        <main className={styles.main}>
          <div className={styles.topBannerContainer}>
            <BannerCarousel items={carouselItems} autoScrollInterval={6000} />

            <div className={styles.overLappedContainer}>
              <div>
                <div className={styles.contentGrid}>
                  <ContentCardBasic
                    title="Gaming accessories"
                    footerLink="#"
                    footerText="See all deals"
                    labels={['Headset', 'Keyboards', 'Computer mice', 'Chairs']}
                    images={[
                      'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg',
                    ]}
                  />

                  <ContentCardSingle
                    title="Get your game on"
                    footerLink="#"
                    footerText="See all deals"
                    images={[
                      'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg',
                    ]}
                    labels={['Get your game on']}
                  />

                  <ContentCardBasic
                    title="Shop deals in Fashion"
                    footerLink="#"
                    footerText="See all deals"
                    labels={['Jeans under $50', 'Tops under $25', 'Dresses under $30', 'Shoes under $50']}
                    images={[
                      'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg',
                    ]}
                  />

                  <ContentCardBasic
                    title="Shop deals"
                    footerLink="#"
                    footerText="See all deals"
                    labels={['Cleaning Tools', 'Home Storage', 'Home Decor', 'Bedding']}
                    images={[
                      'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_1x._SY116_CB563137408_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_1x._SY116_CB563137408_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_1x._SY116_CB563137408_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_1x._SY116_CB563137408_.jpg',
                    ]}
                  />

                  <ContentCardBasic2
                    title="Top categories in Kitchen appliances"
                    footerLink="#"
                    footerText="See all deals"
                    labels={['Cooker', 'Coffee', 'Pots and Pans', 'Kettles']}
                    images={[
                      'https://m.media-amazon.com/images/I/313wAT6Iy2L._SY160_.jpg',
                      'https://m.media-amazon.com/images/I/21W7-lndINL._SY75_.jpg',
                      'https://m.media-amazon.com/images/I/21B-NkA9p-L._SY75_.jpg',
                      'https://m.media-amazon.com/images/I/217GQ1a2QzL._SY75_.jpg',
                    ]}
                  />

                  <ContentCardBasic
                    title="New home arrivals under $50"
                    footerLink="#"
                    footerText="See all deals"
                    labels={['Kitchen and Dining', 'Home Improvement', 'Decor', 'Bedding & Bath']}
                    images={[
                      'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_315_HP_NewArrivals_QuadCard_D_01_1x._SY116_CB555960040_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_316_HP_NewArrivals_QuadCard_D_02_1x._SY116_CB555960040_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_1x._SY116_CB555960040_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_318_HP_NewArrivals_QuadCard_D_04_1x._SY116_CB555960040_.jpg',
                    ]}
                  />

                  <ContentCardSingle
                    title="Gifts for Mother's Day"
                    footerLink="#"
                    footerText="See all deals"
                    images={[
                      'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/MothersDay2025/Fuji_MD25_SingleImageCard_1x._SY304_CB545991451_.jpg',
                    ]}
                    labels={["Gifts for Mother's Day"]}
                  />

                  <ContentCardBasic
                    title="Refresh your space"
                    footerLink="#"
                    footerText="See all deals"
                    labels={['Dining', 'Home', 'Kitchen', 'Health & Beauty']}
                    images={[
                      'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg',
                      'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg',
                    ]}
                  />
                </div>

                <ScrollingProducts
                  title="Based on your searched results"
                  categoryName="Jeans"
                  seeMoreLink="#"
                  // isSeeMoreVisible={false}
                  productsData={scrollingProductsSampleData}
                />

                <div className={styles.contentGrid}>
                  <ContentCardBasic2
                    title="Yo top stuff here. Look no further, we gat u"
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
                    images={[
                      'https://placehold.co/100x75',
                      'https://placehold.co/100x75',
                      'https://placehold.co/100x75',
                      'https://placehold.co/100x75',
                    ]}
                  />

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
                </div>

                <ScrollingProducts
                  title="Based on your searched results"
                  categoryName="Jeans"
                  seeMoreLink="#"
                  // isSeeMoreVisible={false}
                  productsData={scrollingProductsSampleData}
                />

                <div className={styles.contentGrid}>
                  <ContentCardBasic2
                    title="Yo top stuff here. Look no further, we gat u"
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
                    images={[
                      'https://placehold.co/100x75',
                      'https://placehold.co/100x75',
                      'https://placehold.co/100x75',
                      'https://placehold.co/100x75',
                    ]}
                  />

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
                </div>
              </div>
            </div>
          </div>

          <CustomerViewedItems />
        </main>

        <SignInRecommendation />
        <Footer />
      </div>
    </>
  );
}
