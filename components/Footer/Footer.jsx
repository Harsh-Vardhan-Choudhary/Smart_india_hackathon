import React from 'react'
import styles from "./Footer.module.css"
import { AiFillTwitterSquare, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

export default function Footer() {
    return (
        <>
            <div className={styles.footerfirst}>
                <div className={styles.f_clas}>
                    <div className={styles.f_features}>
                        Features
                    </div>
                    <div className={styles.f_about}>
                        About
                    </div>
                    <div className={styles.f_blog}>
                        Blog
                    </div>
                    <div className={styles.f_support}>
                        Support
                    </div>
                </div>
                <div className={styles.sample2}></div>
                <div className={styles.icons}>
                    <div className={styles.iconfirst}>
                        <pre>
                            <AiFillTwitterSquare/>  <AiFillInstagram />  <AiFillFacebook />  <IoLogoWhatsapp />
                        </pre>
                    </div>
                    {/* <div className="icontwo">
                        Contact Us:-<br></br>
                        Team SAATH
                    </div> */}
                </div>
            </div>
            <div className={styles.footersecond}>
                © 2020 Copyright For all The Designing And Code Team Saath 
            </div>
        </>
    );
};
