import React from 'react';
import styles from "@/app/blog/blog.module.css";
import Link from "next/link";
import Image from "next/image";


const  Blog = () => {
  return (
    <div className={styles.mainContainer}>
     
        <Link href="/testid" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="/websites.jpg"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>title</h1>
            <p className={styles.desc}>desc</p>
          </div>
        </Link>

    </div>
  )
}

export default Blog
