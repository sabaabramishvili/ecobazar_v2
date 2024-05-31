import Image from "next/image";
import styles from "./page.module.css";
import TopHeader from "./Components/TopHeader/TopHeader";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import MainBanner from "./Components/MainBanner/MainBanner";
import SideBanner from "./Components/SideBanner/SideBanner";


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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
