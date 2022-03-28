import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Featured from "../components/Featured/Featured"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Featured />


      <div className={styles.div_main}>
        <div className={styles.div_containt}>
          <h2> Why do we need Scholarship ? </h2> <br />
          <p className={styles.lorem}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quas
            repudiandae corporis placeat quaerat aliquid nemo iusto architecto
            molestias est vel enim illo, numquam dolore cumque facere ? Itaque
            harum eos quod eius ea!
          </p>
        </div>
      </div>
      <div className={styles.btn}>
        {/* <div className={styles.btn1}>
          <Link href="./Sortedscholarship.jsx"><button type={styles.text}> apply   </button></Link>
        </div> */}
        <div className={styles.btn1}>
          {/* <Link href="./Sortedscholarship"><button type={styles.text}> no use of this button </button></Link> */}
          <Link href="./Sortingpage"><button type={styles.text}> Find Your Scholarship Now </button></Link>
        </div>
        <div className={styles.btn1}>
          <button type={styles.text}> View All Scholarship </button>

        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.card1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid
          aliquam quidem neque deserunt, impedit veritatis!
        </div>
        <div className={styles.card1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid
          aliquam quidem neque deserunt, impedit veritatis!
        </div>
        <div className={styles.card1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid
          aliquam quidem neque deserunt, impedit veritatis!
        </div>
      </div>

      <br />
      <Footer />
    </div>
  )
}
