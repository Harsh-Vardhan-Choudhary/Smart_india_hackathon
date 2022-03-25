import React from 'react'
import "./Sorting.module.css"

export default function Sorting() {
    return (
        <>
            <h1 class="w">Welcome</h1>
            <p>For Academic year 2022-23</p>
            <p>Fill in the entries appropriately.</p>
            <div class="container">
                <div class="title">Registration</div>
                <form action="#">
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">Student Name</span>
                            <input type="text" placeholder="Enter your name" required></input>
                        </div>
                        <div class="input-box">
                            <span class="details">Date of birth</span>
                            <input type="text" placeholder="as per 10th marksheet" required></input>
                        </div>
                        <div class="gender-details">
                            <input type="radio" name="gender" id="dot-1"></input>
                            <input type="radio" name="gender" id="dot-2"></input>
                            <input type="radio" name="gender" id="dot-3"></input>
                            <span class="gender-title">choose your gender</span>

                            <div class="category">
                                <label for="dot-1">
                                    <span class="dot one"></span>
                                    <span class="gender">Male</span>
                                </label>
                                <label for="dot-2">
                                    <span class="dot two"></span>
                                    <span class="gender">Female</span>
                                </label>
                                <label for="dot-3">
                                    <span class="dot three"></span>
                                    <span class="gender">Other</span>
                                </label>
                            </div>
                        </div>
                        <div class="input-box">
                            <span class="details">Family's net income</span>
                            <input type="text" placeholder="In Rs." required></input>
                        </div>
                        <div class="input-box">
                            <span class="details">Competitive exam given?</span>
                            <input type="text" placeholder="yes or no" required></input>
                        </div>
                        <div class="input-box">
                            <span class="details">Domicile:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div class="input-box">
                            <span class="details">Minority</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div class="input-box">
                            <span class="details">Religion:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div class="input-box">
                            <span class="details">Religion:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div class="input-box">
                            <span class="details">Enter your category:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div class="input-box">
                            <span class="details">Country name:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div class="input-box">
                            <span class="details">Nationality:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div class="input-box">
                            <span class="details">jee/neet/other's percentile:</span>
                            <input type="text" placeholder="" required></input>
                        </div>
                        <div class="input-box">
                            <span class="details">marks in 10th & 12th:</span>
                            <input type="text" placeholder="" required></input>
                        </div>


                    </div>
                    <div>
                        <input class="button" type="submit" value="Find for me"></input>
                    </div>
                </form>
            </div>
        </>
    );
};
