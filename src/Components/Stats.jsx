import React from "react"
import styles from "./css/Stats.module.css"

const Stats = ({ stats, labels }) => {
  return (
    <div className={styles.flex}>
      {stats.map(
        (stat, idx) =>
          stat !== undefined && (
            <p className={styles.stat} key={labels[idx]}>
              {labels[idx]}<br /> {stat}
              {labels.length - 1 === idx ? "%" : ""}
            </p>
          )
      )}
    </div>
  )
}

export default Stats
