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
                        <h1>Scholarship Name</h1>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum pariatur nobis incidunt unde. Ipsa aut corrupti,
                        ea dignissimos amet tempora incidunt ipsam labore in, explicabo, ducimus praesentium quos. Mollitia perspiciatis
                        deserunt repudiandae voluptatem est tempore minus quidem quibusdam sint aliquid, fugit recusandae maxime praesentium incidunt.
                        <br></br>
                        <br></br>
                        <h2>Description</h2>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quos consequuntur, incidunt amet veritatis iure nihil eum consequatur. Non suscipit voluptatem harum blanditiis esse delectus nihil iusto quos aut distinctio.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perspiciatis itaque minus beatae quis omnis corrupti saepe aperiam odit! Ab, dolores dolorem at veniam odio voluptates? Rerum ut quisquam doloribus?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perspiciatis itaque minus beatae quis omnis corrupti saepe aperiam odit! Ab, dolores dolorem at veniam odio voluptates? Rerum ut quisquam doloribus?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perspiciatis itaque minus beatae quis omnis corrupti saepe aperiam odit! Ab, dolores dolorem at veniam odio voluptates? Rerum ut quisquam doloribus?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi error nobis, dolores eveniet amet maiores possimus, iusto sequi neque magnam. A expedita laudantium dolores tempore placeat quas, amet ut?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
