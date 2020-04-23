import React from 'react'
import styles from "../../css/single-course.module.css"
import Image from "gatsby-image"

const Course = ({ title, url, size , image}) => {

 const mainImage = image.childImageSharp.fluid;
    return (
      <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="course-link"
    >
      <article className={styles.course}>
        <div className={styles.container}>
        <Image fluid={mainImage} alt={title}></Image>
          <p>{size} hours</p>
        </div>
        <div className={styles.footer}>
          <h4>{title}</h4>

        </div>
      </article>
    </a>
    )
}

export default Course
