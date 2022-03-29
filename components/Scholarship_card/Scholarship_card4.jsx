import React from 'react'
import styles from "./Scholarship_card.module.css"

import Link from 'next/link';

export default function Scholarship_card() {
    return (
        <>
            <div className={styles.wrappercard}>
                <div className={styles.actualcard}>
                    <div className={styles.imagecard}>
                        <img className={styles.imagecardinner} src="/images/download.jpeg" alt="" />
                        <Link href="./Scholarshipeleborated"><button className={styles.buttoncard} type="button">View More</button></Link>
                    </div>
                    <div className={styles.contentcard}>
                        <h1>Mukhyamantri Medhavi Vidyarthi Yojna</h1>
                        {"Be a resident of Madhya Pradesh. Have passed Class 12 with 70% or more marks (if appeared through Secondary Education Board of Madhya Pradesh) or have obtained 85% or more marks (if appeared through CBSE/ICSE Board)."}
                        <br></br>
                        <br></br>
                        <h2>Description</h2>
                        <ul>
                            <li>Have an annual parent/guardian income of less than INR 6 lakh from all sources.
                            </li>
                            <li>{"For engineering aspirants - The students who have qualified JEE Mains exam with a rank of less than 1,50,000 can apply for the scholarship."}</li>
                            <li>{"For medical aspirants - The students who have obtained admission to a government/private medical/dental college through NEET merit are eligible to apply."}</li>
                            <li>{"For law aspirants - The students who have qualified the CLAT examination and obtained admission to an NLU or Delhi University are eligible to apply."}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
