import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

//Step 1: Collect all data from blogdata directory
//Step 2: Iterate through them and display them

const Blogs = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    console.log("use effect is running");
    fetch("http://localhost:3000/api/blogs").then((a) => {
      return a.json()
    })
      .then((parsed) => {
        setblogs(parsed)
      })
  }, [])
  return (
    <>
      <div className={styles.main}>

        {blogs.map((blogitem) => {
          return <div className={styles.blogitem} key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h3 className="blog-title">
                {blogitem.title}
              </h3></Link>
            <p className="blog-description">
              {blogitem.content.substr(0, 150)}
            </p>
          </div>
        })}
      </div>
    </>
  )
}

export default Blogs