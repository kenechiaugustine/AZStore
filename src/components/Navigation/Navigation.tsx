import { FaBars } from 'react-icons/fa6';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <section className={styles.NavigationContainer}>
        <ul className={styles.NavigationList}>
          <li className={styles.AllMenuNavigation}>
            <FaBars />
            All
          </li>
          <li>
            <a href="#">Today's Deals</a>
          </li>
          <li>
            <a href="#">Registry</a>
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
