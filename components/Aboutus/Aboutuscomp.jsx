import React from 'react'
import styles from "./Aboutuscomp.module.css"

export default function Aboutus() {
    return (
        <>
            <div className={styles.vision}>
                <h3 className={styles.l}>Our Vision</h3>
                <h1 className={styles.love}>We <img className={styles.loveee} src="images/red-heart_2764-fe0f.png" alt="t"></img> what we do!</h1>
                <h2 className={styles.l1}>We're here to make your education easier.</h2>
            </div>
            <div className={styles.middlecon}>
                <h1 className={styles.l2}><em>A newshore experience like you've never had before.</em></h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque enim et quam cursus sagittis. Ut tempus massa et dolor maximus, laoreet malesuada erat luctus. Nam fermentum turpis id enim iaculis, non laoreet tortor ullamcorper. Phasellus tortor elit, commodo et venenatis a, facilisis in ex. Cras sodales erat leo, condimentum pulvinar erat congue ac. Phasellus nec velit ac enim ultricies semper. Vivamus vehicula vitae eros eu mattis. Sed eleifend erat eget dolor blandit, et cursus erat faucibus. Nullam in sem metus. Proin sit amet hendrerit augue, eu condimentum lectus. Etiam maximus nunc vitae mi pellentesque viverra. Aenean viverra luctus tellus. Quisque mi mauris, varius non ante at, varius lacinia sapien.</p>
            </div>
            <div className={styles.bottomcon}>
                <h1 className={styles.members}>Meet Our People!</h1>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <img className={styles.im5}
                        src="images/beard.png"
                        alt="m1"
                    />
                </div>
                <div className={styles.column}>
                    <img className={styles.im4}
                        src="images/woman (1).png"
                        alt="m4"

                    /></div>
                <div className={styles.column}>
                    <img className={styles.im3}
                        src="images/bussiness-man.png"
                        alt="m2"

                    />
                </div>
                <div className={styles.column}>
                    <img className={styles.im1}
                        src="images/man.png"
                        alt="m3"
                    />
                </div>
                <div>
                    <img className={styles.im2} src="images/woman.png"
                        alt="m5"
                    />
                </div>
            </div>
        </>
    );
};
