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
                        <h1>Fulbright-Nehru Master's Fellowships</h1>
                    
                    
                        The Fulbright-Nehru Master’s Fellowships are designed for outstanding Indians to pursue a master’s degree program at select U.S. colleges
                        and universities in the areas of Arts and Culture Management including Heritage Conservation and Museum StudieS; Economics; Environmental Science/Studies; Higher Education Administration; International Affairs; International Legal Studies; Journalism and Mass Communication; Public Administration; Public Health; Urban and Regional Planning; and Women’s Studies/Gender Studies.

                        <br></br>
                        <br></br>
                        <h2>Description</h2>
                        <ul>
                            <li>Must have completed an equivalent of a U.S. bachelor's degree from a recognized Indian university with at least 55% marks. Applicants must either possess a four-year bachelor's degree or a completed master's degree; or a full-time postgraduate diploma from a recognized Indian institution, if the bachelor's degree is of less than four years' duration.</li>
                            <li>Must have at least three years' full-time (paid) professional work experience relevant to the proposed field of study by the application deadline.</li>
                            <li>Must not have another degree from a U.S. university or be enrolled in a U.S. degree program.</li>

                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
