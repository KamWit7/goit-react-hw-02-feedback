import React from "react"
import styles from "./css/FeedbackOptions.module.css"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.flex}>
      {options.map((option) => (
        <button
          className={styles.btn}
          key={option}
          onClick={() => onLeaveFeedback(option.toLowerCase())}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default FeedbackOptions
