import styles from "./Featured.module.css"
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const img = [
    "/images/Scholarships-in-Italy.jpg",
    "/images/Scholarship-Simform.png",
    "/images/scholarship-academic-graduation_6427-401.webp",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/images/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {img.map((images, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={images} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src = "/images/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
   
  );
};

export default Featured;