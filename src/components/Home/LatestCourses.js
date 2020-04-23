import React from 'react'
import Course from '../Courses/Course'
import {Graphql , useStaticQuery , Link} from 'gatsby'
import styles from "../../css/courses.module.css"
import Title from "../Title"


const query = graphql`
{
    allStrapiCourse(sort: {fields: published, order: DESC}
        limit:2) {
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
    <Title title="TOP" subtitle="courses"> </Title>
    <div className={styles.center}> 
    {
        courses.map((item , index)=>{
            
            return <Course key={item.id} {...item}></Course>
        })
    }
    </div>
    <Link to="/courses" className="btn-primary"> all courses </Link>
    </section>
}

export default Courses
