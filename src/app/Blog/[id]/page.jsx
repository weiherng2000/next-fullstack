import React from 'react'
import styles from '@/app/blog/[id]/page.module.css'
import Image from "next/image";
import pic from "public/pexels-photo.jpeg";



const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>
           desc
          </p>
          <div className={styles.author}>
            <Image
              src= {pic}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src= {pic}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Random content
        </p>
      </div>
    </div>
  );
};

export default BlogPost
