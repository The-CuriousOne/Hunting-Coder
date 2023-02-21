import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <main className={styles.main}>
        <h1>About Hunting Coder</h1>
        <div className={styles.aboutitem}>
          <div className={styles.abouttitle}>
            <h2>Introduction</h2>
          </div>
          <div className={styles.aboutdescription}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quidem? Minus, quas! Earum maxime dignissimos rem quisquam omnis voluptatem ab quis. Tempora iure iste asperiores dolores quia eligendi! Doloremque repellat repellendus deleniti est. Blanditiis officiis et explicabo dicta. Quod, blanditiis at similique enim deserunt labore nisi doloribus tempore nihil quam omnis magni ducimus natus sit vel, id reprehenderit nam non quo consectetur ipsa molestias nobis.
            </p>
          </div>
        </div>
        <div className={styles.aboutitem}>
          <div className={styles.abouttitle}>
            <h2>Services Offered</h2>
          </div>
          <div className={styles.aboutdescription}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quis. Saepe, blanditiis harum cum excepturi maiores atque mollitia quas itaque qui, exercitationem id quaerat magnam repellat quia fugiat hic iure sit vitae officiis eligendi.
            </p>
            <p>
              We offer the following services
              <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
                <li>Service 5</li>
                <li>Service 6</li>
                <li>Service 7</li>
                <li>Service 8</li>
              </ul>
            </p>
          </div>
        </div>
        <div className={styles.aboutitem}>
          <div className={styles.abouttitle}>
            <h2>Contact Us</h2>
          </div>
          <div className={styles.aboutdescription}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et animi harum assumenda necessitatibus explicabo nam, corporis deleniti, ab ad praesentium blanditiis iste saepe perferendis impedit architecto quia cupiditate? Accusantium est in inventore repellendus unde. Dolores labore deserunt corrupti fugiat ratione perspiciatis illo optio suscipit aliquid cumque nihil soluta earum, assumenda eligendi nulla sed molestias unde?
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default About