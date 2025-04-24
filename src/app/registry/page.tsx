import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import styles from './Registry.module.css';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function RegistryPage() {
  return (
    <>
      <Header />
      <Navigation />
      <Sidebar />
      <main className={styles.RegistryMain}>
        <h1>Registry page</h1>
      </main>
      <Footer />
    </>
  );
}
