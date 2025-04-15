'use client';

import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { useSidebar } from '@/hooks/SidebarContext';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const sidebarContent = (
    <>
      <div className={styles.sidebarHeader}>
        <h3>Hello, sign in</h3> {/* Or dynamically show user name */}
      </div>
      <div className={styles.sidebarSection}>
        <h4>Digital Content & Devices</h4>
        <ul>
          <li>
            <a href="#">Prime Video</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">Amazon Music</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">Kindle E-readers & Books</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">Amazon Appstore</a>
            <FaAngleRight />
          </li>
          {/* Add more items */}
        </ul>
      </div>
      <div className={styles.sidebarSection}>
        <h4>Digital Content & Devices</h4>
        <ul>
          <li>
            <a href="#">Prime Video</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">Amazon Music</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">Kindle E-readers & Books</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">Amazon Appstore</a>
          </li>
          {/* Add more items */}
        </ul>
      </div>
      <div className={styles.sidebarSection}>
        <h4>Digital Content & Devices</h4>
        <ul>
          <li>
            <a href="#">Prime Video</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">Amazon Music</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">Kindle E-readers & Books</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">Amazon Appstore</a>
            <FaAngleRight />
          </li>
        </ul>
      </div>
      <div className={styles.sidebarSection}>
        <h4>Shop by Department</h4>
        <ul>
          <li>
            <a href="#">Electronics</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">Computers</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">Smart Home</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">Arts & Crafts</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">See all</a>
            <FaAngleRight />
          </li>{' '}
        </ul>
      </div>
      <div className={styles.sidebarSection}>
        <h4>Programs & Features</h4>
        <ul>
          <li>
            <a href="#">Gift Cards</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">Shop By Interest</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">Amazon Live</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">International Shopping</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#">See all</a>
            <FaAngleRight />
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <>
      {isSidebarOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
      <aside className={`${styles.sidebarContainer} ${isSidebarOpen ? styles.open : ''}`}>
        <div className={styles.sidebarAsideContent}>
          <div className={styles.sidebarContent}>{sidebarContent}</div>
        </div>

        <button onClick={toggleSidebar} className={styles.closeButton} aria-label="Close sidebar">
          x
        </button>
      </aside>
    </>
  );
}
