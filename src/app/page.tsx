import styles from "./page.module.css";
import Navigation from "@/components/Navigation/Navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <div>
        <Header />
        <Navigation />
        <main className={styles.main}>
          <h1>Home Page</h1>
        </main>
        <Footer />
      </div>
    </>
  );
}
