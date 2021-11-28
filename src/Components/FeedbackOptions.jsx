import React from "react"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(onLeaveFeedback, this)
  return options.map((option) => (
    <button key={option} onClick={() => onLeaveFeedback(option.toLowerCase())}>
      {option}
    </button>
  ))
}

export default FeedbackOptions
