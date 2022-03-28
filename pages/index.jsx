import styles from '../styles/Home.module.css'

import Link from 'next/link';

import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Scholarship_card from '../components/Scholarship_card/Scholarship_card';

import { initializeApp } from "firebase/app";
import { getFirestore, 
collection, 
getDocs} from "firebase/firestore";

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
      <Navbar />
      <div className={styles.div_main}>
        <div className={styles.div_containt}>
          <h2> Lorem ipsum dolor sit amet consectetur. </h2> <br />
          <p className={styles.lorem}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quas
            repudiandae corporis placeat quaerat aliquid nemo iusto architecto
            molestias est vel enim illo, numquam dolore cumque facere ? Itaque
            harum eos quod eius ea!
          </p>
        </div>
      </div>
      <div className={styles.btn}>
        <div className={styles.btn1}>
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
      <Scholarship_card/>
      <Footer />
    </div>
  )
}
