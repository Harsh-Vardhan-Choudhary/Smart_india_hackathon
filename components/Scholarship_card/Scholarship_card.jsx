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
                        <h1>Pragati Scholarship – AICTE-Scholarship Scheme to Girl Child (SSGC)</h1>
                        Pragati Scholarship is meant for girl students who are have taken admission in the 1st year of diploma/degree programme of an AICTE approved institution. This scholarship for girls offers a scholarship amount of up to INR 30,000 each to 4000 girl students every year to pursue higher education.
                        <br></br>
                        <br></br>
                        <h2>Description</h2>
                        <ul>
                            <li>INR 30,000 or actual tuition fee amount, whichever is less, and INR 2000 per month for 10 months as incidental charges each year</li>
                            <li>Girl candidates who have taken admission in the 1st year of diploma/degree programme of an AICTE approved institution in the current academic year, annual family income must not exceed INR 8 Lakh.
                                <li>Not more than two girls from one family can apply for the scholarship</li>
</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
