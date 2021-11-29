import React from "react"
import styles from "./css/Section.module.css"

const Section = (props) => {
  const { title, fontSize } = props
  const titleStyles = [styles.size, styles.flex].join(" ")
  const hSize = fontSize === "big" ? styles.title__big : styles.title__small
  console.log(props)
  return (
    <section className={titleStyles}>
      {title !== undefined && (
        <h1 className={(hSize, styles.title)}>{title}</h1>
      )}
      {props.children}
    </section>
  )
}

export default Section
