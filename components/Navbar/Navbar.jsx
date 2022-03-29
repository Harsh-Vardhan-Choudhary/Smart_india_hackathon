import React from 'react'
import styles from "./Navbar.module.css"

import Link from 'next/link'


export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
      <img className={styles.glogo} src="images/Getscholar-removebg-preview.png" alt="t"></img>
        <div className={styles.logo} href="./">Getscholar</div>
        <ul className={styles.nav_ul}>
          <li className={styles.nav_ul_li}>
            <a href="./" className={styles.nav_ul_li_a}>Home</a>
          </li>
          <li className={styles.nav_ul_li}>
            <a href="./Aboutus" className={styles.nav_ul_li_a}>About</a>
            <ul className={styles.nav_ul_ul}>
              <li className={styles.nav_ul_ul_li}>
                <a href="./Aboutus" className={styles.nav_ul_ul_li_a}>our team</a>
              </li>
              <li className={styles.nav_ul_ul_li}>
                <a href="./" className={styles.nav_ul_ul_li_a}>The need</a>
              </li>
            </ul>

          </li>
          <li className={styles.nav_ul_li}>
            <a href="./Sorting" className={styles.nav_ul_li_a}>Categories</a>
            <ul className={styles.nav_ul_ul}>
              <li className={styles.nav_ul_ul_li}>
                <a href="#" className={styles.nav_ul_ul_li_a}>International scholarships</a>
              </li>
              <li className={styles.nav_ul_ul_li}><a href="#">National Scholarships</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};
