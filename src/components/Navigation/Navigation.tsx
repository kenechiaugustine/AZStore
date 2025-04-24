'use client';
import { FaBars } from 'react-icons/fa6';
import styles from './Navigation.module.css';
import { useSidebar } from '@/hooks/SidebarContext';

export default function Navigation() {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <section className={styles.NavigationContainer}>
        <ul className={styles.NavigationList}>
          <li className={styles.AllMenuNavigation} onClick={toggleSidebar}>
            <FaBars />
            All
          </li>
          <li>
            <a href="#">Today's Deals</a>
          </li>
          <li>
            <a href="/registry">Registry</a>
          </li>
          <li>
            <a href="#">Customer Service</a>
          </li>
          <li>
            <a href="#">Gift cards</a>
          </li>
          <li>
            <a href="#">Sells</a>
          </li>
        </ul>
      </section>
    </>
  );
}
