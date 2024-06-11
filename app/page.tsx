import Image from "next/image";
import styles from "./page.module.css";
import TopHeader from "./Components/TopHeader/TopHeader";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import MainBanner from "./Components/MainBanner/MainBanner";
import SideBanner from "./Components/SideBanner/SideBanner";
import MiniBanner from "./Components/miniBanner/MiniBanner";
import FeatureWrapper from "./Components/FeatureWrapper/FeatureWrapper";
import ProductHead from "./Components/ProductHead/ProductHead";
import PopularCategories from "./Components/PopularCategories/PopularCategories";
import Products from "./Components/Products/Products";
import PopularProducts from "./Components/PopularProducts/PopularProducts";
import SaleBanners from "./Components/SaleBanners/SaleBanners";
import HotSale from "./HotSale/HotSale";
import HotDeals from "./Components/HotDeals/HotDeals";
import DiscountBanner from "./Components/DiscountBanner/DiscountBanner";
import FeatureProducts from "./Components/FeaturedProducts/FeatureProducts";
import Date from "./Components/Date/Date";
import NewsWrap from "./Components/NewsWrap/NewsWrap";


export default function Home() {
  return (
    <>
      <div className={`${styles.fullScreen} ${styles.line}`}>
        <div className={styles.container}>
          <TopHeader />
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.container}>
          <Header />
        </div>
      </div>
      <div className={`${styles.fullScreen} ${styles.navbg}`}>
        <div className={styles.container}>
          <Navigation />
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.container}>
          <div className={styles.bannerWrapper}>
            <MainBanner />
            <div className={styles.miniBanners}>
              <SideBanner />
              <MiniBanner />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.container}>
          <FeatureWrapper />
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.container}>
          <ProductHead name="Popular Categories" />
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.container}>
          <PopularCategories />
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.container}>
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.container}>
          <ProductHead name="Popular Categories" />
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.container}>
          <PopularProducts />
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.container}>
          <SaleBanners />
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.container}>
          <ProductHead name="Hot Deals" />
        </div>
      </div>
      <div className={`${styles.fullScreen} ${styles.dealsbg}`}>
        <div className={styles.container}>
          <HotDeals />
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.container}>
          <DiscountBanner />
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.container}>
          <ProductHead name="Featured Products" />
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.container}>
          <FeatureProducts />
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.container}>
          <NewsWrap />
        </div>
      </div>
    </>
  );
}
