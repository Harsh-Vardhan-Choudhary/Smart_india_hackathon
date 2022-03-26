import React from 'react'
import styles from "./Sorting.module.css"

import Link from 'next/link';

export default function Sorting() {
    return (
        <>
            <h1 class="w">Welcome</h1>
            <p>For Academic year 2022-23</p>
            <p>Fill in the entries appropriately.</p>
            <div className={styles.container}>
                <div className={styles.title}>Registration</div>
                <form action="#">
                    <div className={styles.user_details}>
                        <div className={styles.input_box}>
                            <span className={styles.details}>Student Name</span>
                            <input type="text" placeholder="Enter your name" required></input>
                        </div>
                        <div className={styles.input_box}>
                            <span className={styles.details}>Date of birth</span>
                            <input type="text" placeholder="as per 10th marksheet" required></input>
                        </div>
                        <div className={styles.gender_details}>
                            <input type="radio" name="gender" id="dot-1"></input>
                            <input type="radio" name="gender" id="dot-2"></input>
                            <input type="radio" name="gender" id="dot-3"></input>
                            <span className={styles.gender_title}>choose your gender</span>

                            <div className={styles.category}>
                                <label for="dot-1">
                                    <span className={styles.dot_one}></span>
                                    <span className={styles.gender}>Male</span>
                                </label>
                                <label for="dot-2">
                                    <span className={styles.dot_two}></span>
                                    <span className={styles.gender}>Female</span>
                                </label>
                                <label for="dot-3">
                                    <span className={styles.dot_three}></span>
                                    <span className={styles.gender}>Other</span>
                                </label>
                            </div>
                        </div>
                        <div className={styles.input_box}>
                            <span className={styles.details}>Family's net income</span>
                            <input type="text" placeholder="In Rs." required></input>
                        </div>
                        <div className={styles.input_box}>
                            <span className={styles.details}>Competitive exam given?</span>
                            <input type="text" placeholder="yes or no" required></input>
                        </div>
                        <div className={styles.input_box}>
                            <span className={styles.details}>Domicile:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div className={styles.input_box}>
                            <span className={styles.details}>Minority</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div className={styles.input_box}>
                            <span className={styles.details}>Religion:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div className={styles.input_box}>
                            <span className={styles.details}>Religion:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div className={styles.input_box}>
                            <span className={styles.details}>Enter your category:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div className={styles.input_box}>
                            <span className={styles.details}>Country name:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div className={styles.input_box}>
                            <span className={styles.details}>Nationality:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div className={styles.input_box}>
                            <span className={styles.details}>jee/neet/other's percentile:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div className={styles.input_box}>
                            <span className={styles.details}>marks in 10th & 12th:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                    </div>
                    <div>
                    <Link href="./Sortedscholarship"><input className={styles.button} type="submit" value="Find for me"></input></Link>
                    </div> 
                </form>
            </div>
        </>
    );
};
