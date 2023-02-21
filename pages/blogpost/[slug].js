import React, { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'

//Step 1: Find the file corresponding to the slug
//Step 2: Populate them inside the page

const slug = () => {
  const[blog,setblogs]=useState();
  const router = useRouter();
  useEffect(() => {
    if(!router.isReady) return;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
      return a.json()
    })
      .then((parsed) => {
        setblogs(parsed)
      })
  }, [router.isReady])
  const { slug } = router.query;

  return (
    <>
      <div className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>
          {blog && blog.content}
        </div>
      </div>
    </>
  )
}

export default slug