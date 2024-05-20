import React from 'react'
import styles from './Hero.module.css'

export const Hero = () => {
  console.log(styles);
  
  return (
    <section className={styles.Hero}>
      <h1>Future world</h1>
      <h2>Empowering Your Tomorrow, Today!</h2>
    </section>
  )
}