import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Featured from "../components/Featured/Featured"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Scholarship_card from '../components/Scholarship_card/Scholarship_card';

import Head from 'next/head'

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABKX9ppBozwOawb5xLRjT0nkTnzv4og7U",
  authDomain: "smart-india-hackathon-542ea.firebaseapp.com",
  projectId: "smart-india-hackathon-542ea",
  storageBucket: "smart-india-hackathon-542ea.appspot.com",
  messagingSenderId: "1041313564863",
  appId: "1:1041313564863:web:37d0f9e1b4f536f95cde0a",
  measurementId: "G-EXCLTBZBRP"
};


initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'Details')

getDocs(colRef)
  .then((snpashot) => {
    console.log(snpashot.docs)
  })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Getscholar</title>
        <link rel="icon" href="/favicon.ico" ></link>
      </Head>
      <Navbar />
      <Featured />
      <div className={styles.div_main}>
        <img src="/images/scholar.png" className={styles.img_main}></img>
        <div className={styles.div_containt}>
          <h2> Why do we need Scholarship ? </h2> <br />
        </div>
      </div>
      <p className={styles.lorem}>
        <h4> A scholarship is a form of financial aid awarded to students to further their education.
          While scholarship recipients are not required to repay scholarships, the awards may require that the recipient continue to meet certain requirements during their period of support, such maintaining a minimum grade point average or engaging in a certain activity e.g., playing on a school sports team for athletic scholarship holders, or serving as a teaching assistant for some graduate scholarships.
        </h4>
      </p>
      <div className={styles.btn}>
        <div >
          <Link href="./Sortingpage"><button type={styles.text} className={styles.btn1}> Find Your Scholarship Now </button></Link>
        </div>
        <div>
          <Link href="./Sortedscholarship"><button type={styles.text} className={styles.btn1}> View All Scholarship </button></Link>
        </div>
      </div>
      <div className={styles.front_card_main}>
        <div className={styles.front_card}>
        {"Scholarships are awarded based upon various criteria, such as academic merit, diversity and inclusion, athletic skill, and financial need."}
        </div>
        <div className={styles.front_card}>
        Getting a scholarship takes away all your financial concerns.
          It helps in empowering your academic and career goals by removing the financial barrier
          Over 1.7 million scholarships are awarded annually. However, only 7% of college students will receive a scholarship.
        </div>
        <div className={styles.front_card}>
        Scholarship is to be created  not by compulsion  but by  awakening a pure interest in knowledge.
        </div>
      </div>
      {/* <div className={styles.card}>
        <div className={styles.card1}>
          Scholarships are awarded based upon various criteria, such as academic merit, diversity and inclusion, athletic skill, and financial need.
        </div>
        <div className={styles.card1}>
          Getting a scholarship takes away all your financial concerns.
          It helps in empowering your academic and career goals by removing the financial barrier
          Over 1.7 million scholarships are awarded annually. However, only 7% of college students will receive a scholarship.
        </div>
        <div className={styles.card1}>
          Scholarship is to be created  not by compulsion  but by  awakening a pure interest in knowledge.
        </div>
      </div> */}
      <Scholarship_card />
      <Footer />
    </div>
  )
}
