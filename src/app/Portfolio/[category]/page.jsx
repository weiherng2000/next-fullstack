
import React from "react";
import styles from "@/app/portfolio/[category]/page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

//params is a special parameter for routing purposes we use params.category to refer to the category folder
const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

     
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>title</h1>
            <p className={styles.desc}>desc</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/contact.png"
              alt=""
            />
          </div>
        </div>

    </div>
  );
};

export default Category;

