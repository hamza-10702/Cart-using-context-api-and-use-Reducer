import React from 'react'
import styles from './Banner.module.css'

const Banner = () => {
    return (

        <section className={styles.banner_main}>
            <div className={styles.banner_content}>
                <div className= {styles.first}>
                    <h1>Welcome to my portfolio</h1>
                    <h3>
                        Grid is a blueprint for making websites.

                        The Grid model allows you to layout the content of your website. Not only that, it helps you create the structures you need for building responsive websites for multiple devices. This means your site will look good on desktop, mobile, and tablet.
                    </h3>
                </div>
                <div className={styles.img_cont}>
                    <img src={require('../../Assets/Programming-amico.png')} />
                </div>
            </div>
        </section>
    )
}

export default Banner