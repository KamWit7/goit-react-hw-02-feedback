import React from "react"
import FeedbackOptions from "./FeedbackOptions"
import Section from "./Section"

class Statisitcs extends React.Component {
  constructor(props) {
    super(props)
    const { good, neutral, bad, total, positivePercentage } = props
    this.state = { good, neutral, bad, total, positivePercentage }
  }

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad

  countPositiveFeedbackPercentage = ({ good, total }) =>
    Math.round((good / total) * 100)

  addStat = (stat) => {
    this.setState(() => {
      const toChange = {}

      toChange[stat] = this.state[stat] + 1
      toChange["total"] = this.countTotalFeedback({
        ...this.state,
        ...toChange,
      })

      toChange["positivePercentage"] = this.countPositiveFeedbackPercentage({
        ...this.state,
        ...toChange,
      })

      return { ...this.state, ...toChange }
    })
  }

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state

    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={this.addStat}
          />
        </Section>

        <Section title={"Statistics"}>
          {good !== undefined && <p> Good: {good}</p>}
          {neutral !== undefined && <p>Neutral: {neutral}</p>}
          {bad !== undefined && <p>Bad: {bad}</p>}
          {total !== undefined && <p>Total: {total}</p>}
          {positivePercentage !== undefined && (
            <p>positivePercentage: {positivePercentage}%</p>
          )}
        </Section>
      </>
    )
  }
}

export default Statisitcs
