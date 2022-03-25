import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import styles from "../styles/Home.module.css";

import Footer from "../components/Footer/Footer";


const Home = (prop)=>{
  return (
    <div>
      {" "}
      
      <div className={styles.div_main}>
        <div className={styles.div_containt}>
          <h2> Lorem ipsum dolor sit amet consectetur. </h2> <br />
          <p className={styles.lorem}>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quas
            repudiandae corporis placeat quaerat aliquid nemo iusto architecto
            molestias est vel enim illo, numquam dolore cumque facere ? Itaque
            harum eos quod eius ea!{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className={styles.btn}>
        <div className={styles.btn1}>
          {" "}
          <Link href="./Sortedscholarship"><button type={styles.text}> browse more  </button></Link>{" "}
        </div>{" "}
        <div className={styles.btn1}>
          <button type={styles.text}> no use of this button </button>{" "}
        </div>{" "}
      </div>{" "}
      <div className={styles.card}> 
        <div className={styles.card1}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid
          aliquam quidem neque deserunt, impedit veritatis!{" "}
        </div>{" "}
        <div className={styles.card1}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid
          aliquam quidem neque deserunt, impedit veritatis!{" "}
        </div>{" "}
        <div className={styles.card1}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid
          aliquam quidem neque deserunt, impedit veritatis!{" "}
        </div>{" "}
      </div>{" "}
      <br />
      <Footer />
    </div>
  );
}
export default Home