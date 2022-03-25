<<<<<<< HEAD
import React from 'react';
import "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-4 px-8 bg-gray-700 text-white flex justify-between">
      <div>logo</div>
      <div>
        <div>Home</div>
        <div>About</div>
        <div>Categories</div>
      </div>

    </div>
  )
}


    //   <nav>
    //   <div class="nav-wrapper">
    //     <a href="#" class="brand-logo">Logo</a>
    //     <ul id="nav-mobile" class="right hide-on-med-and-down">
    //       <li><a href="sass.html">Sass</a></li>
    //       <li><a href="badges.html">Components</a></li>
    //       <li><a href="collapsible.html">JavaScript</a></li>
    //     </ul>
    //   </div>
    // </nav>


//     <nav>
//     <div className="nav-wrapper">
//     <Link  href="#" ><a className="brand-logo">Logo</a></Link>
//       <ul id="nav-mobile" className="right">
//         <li><a href="#"> Home </a> </li>
//         <li><a href="#"> About </a>
//           <ul  id="nav-mobile" className="right">
//             <li><Link  href="#" ><a> our team </a></Link></li>
//             <li><a href="#"> The need </a></li>
//           </ul>
//         </li>
//         <li>
//           <a href="#"> Categories </a>
//           <ul>
//             <li>
//               <a href="#"> International scholarships </a>
//             </li>
//             <li>

//               <a href="#"> National Scholarships </a>
//             </li>
//           </ul>
//         </li>
//       </ul>
//       </div>
//     </nav>
//   );
// }

// export default function Navbar() {
//   return (
//     <>
//       <nav>
//         <div className="logo"> Website name </div>{" "}
//         <ul>
//           <li>
//             <a href="#"> Home </a>{" "}
//           </li>{" "}
//           <li>
//             <a href="#"> About </a>{" "}
//             <ul>
//               <li>
//                 <a href="#"> our team </a>{" "}
//               </li>{" "}
//               <li>
//                 <a href="#"> The need </a>{" "}
//               </li>{" "}
//             </ul>{" "}
//           </li>{" "}
//           <li>
//             <a href="#"> Categories </a>{" "}
//             <ul>
//               <li>
//                 <a href="#"> International scholarships </a>{" "}
//               </li>{" "}
//               <li>
//                 {" "}
//                 <a href="#"> National Scholarships </a>{" "}
//               </li>{" "}
//             </ul>{" "}
//           </li>{" "}
//         </ul>{" "}
//       </nav>{" "}
//     </>
//   );
// }
=======
import React from 'react'
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>Website name</div>
        <ul className={styles.nav_ul}>
          <li className={styles.nav_ul_li}>
            <a href="#" className={styles.nav_ul_li_a}>Home</a>
          </li>
          <li className={styles.nav_ul_li}>
            <a href="#" className={styles.nav_ul_li_a}>About</a>
            <ul className={styles.nav_ul_ul}>
              <li className={styles.nav_ul_ul_li}>
                <a href="#" className={styles.nav_ul_ul_li_a}>our team</a>
              </li>
              <li className={styles.nav_ul_ul_li}>
                <a href="#" className={styles.nav_ul_ul_li_a}>The need</a>
              </li>
            </ul>
          </li>
          <li className={styles.nav_ul_li}>
            <a href="#" className={styles.nav_ul_li_a}>Categories</a>
            <ul className={styles.nav_ul_ul}>
              <li className={styles.nav_ul_ul_li}>
                <a href="#" className={styles.nav_ul_ul_li_a}>International scholarships</a>
              </li>
              <li className={styles.nav_ul_ul_li}><a href="#">National Scholarships</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};
>>>>>>> 22a8f3fb2d6fc7ed0e39406dde7fedf5659f675a
