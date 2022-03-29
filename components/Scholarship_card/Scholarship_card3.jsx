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
                        <h1>Pre Matric Scholarships Scheme for Minorities
                        </h1>

                        The scholarship at pre-matric level will encourage parents from minority communities to send their school going children to school, lighten their financial burden on school education and sustain their efforts to support their children to complete school education.The scheme will form the foundation for their educational attainment and provide a level playing field in the competitive employment arena. Empowerment through education, which is one of the objectives of this scheme, has the potential to lead to upliftment of the socio economic conditions of the minority communities.
                        <br></br>
                        <br></br>
                        <h2>Description</h2>
                        <ul>
                            <li>Scholarship will be awarded to the students who have secured not less than 50% marks in the previous final examination.</li>
                            <li>Annual income of their parents/guardian from all sources does not exceed Rs. 1.00 lakh.</li>



                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
