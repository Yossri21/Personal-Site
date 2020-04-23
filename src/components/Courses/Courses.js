import React from 'react'
import Course from './Course'
import {Graphql , useStaticQuery} from 'gatsby'
import styles from "../../css/courses.module.css"
import Title from "../Title"


const query = graphql`
{
    allStrapiCourse(sort: {fields: published, order: DESC}) {
      nodes {
        url
        published
        title
        size
        id
        image{
            childImageSharp{
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
            }
          }
        
      }
    
    }
  }
  
`
const Courses = () => {
   const {allStrapiCourse:{nodes : courses}} = useStaticQuery(query)
   
    return <section>
    <Title title="all" subtitle="courses"> </Title>
    <div className={styles.center}> 
    {
        courses.map((item , index)=>{
            
            return <Course key={item.id} {...item}></Course>
        })
    }
    </div>
    </section>
}

export default Courses
