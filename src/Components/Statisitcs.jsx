import React from "react"
import Stats from "./Stats"
import Section from "./Section"
import Notification from "./Notification"
import FeedbackOptions from "./FeedbackOptions"

class Statisitcs extends React.Component {
  // constructor(props) {
  //   super(props)
  //   const { good, neutral, bad, total, positivePercentage } = props
  //   this.state = { good, neutral, bad, total, positivePercentage }
  // }

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    positivePercentage: this.props.positivePercentage,
  }

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad

  countPositiveFeedbackPercentage = ({ good, total }) =>
    Math.round((good / total) * 100)

  updateStat = (stat) => {
    this.setState(() => {
      const toChange = {}

      toChange[stat] = this.state[stat] + 1
      toChange["total"] = this.countTotalFeedback({
        ...this.state,
        ...toChange,
      })

      toChange["positivePercentage"] = this.countPositiveFeedbackPercentage({
        ...this.state, // prevent NaN
        ...toChange,
      })

      return toChange
    })
  }

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state
    return (
      <>
        <Section title={"Please leave feedback"} fontSize={"big"}>
          <FeedbackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={this.updateStat}
          />
        </Section>
        <Section title={"Statistics"} fontSize={"small"}>
          {this.countTotalFeedback({ good, neutral, bad }) ? (
            <Stats
              stats={[good, neutral, bad, total, positivePercentage]}
              labels={["Good", "Neutral", "Bad", "Total", "Positive feedback"]}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    )
  }
}

export default Statisitcs
