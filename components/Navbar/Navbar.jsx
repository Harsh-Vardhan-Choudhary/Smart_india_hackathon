import React from 'react'
import "./Navbar.module.css"

export default function Navbar() {
  return (
    <>
      <nav>
        <div class="logo">Website name</div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
            <ul>
              <li>
                <a href="#">our team</a>
              </li>
              <li>
                <a href="#">The need</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Categories</a>
            <ul>
              <li>
                <a href="#">International scholarships</a>
              </li>
              <li><a href="#">National Scholarships</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};