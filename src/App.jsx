import { useState } from 'react'

import Container from './components/Container/Container'
import Section from './components/Section/Section'
import Statistics from './components/Statistics/Statistics'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Notification from './components/Notification/Notification'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleIncrement = (event) => {
    const { name } = event.target

    // eslint-disable-next-line default-case
    switch (name) {
      case 'good':
        setGood((prevState) => prevState + 1)
        break
      case 'neutral':
        setNeutral((prevState) => prevState + 1)
        break
      case 'bad':
        setBad((prevState) => prevState + 1)
        break
    }
  }

  const countTotalFeedback = () => {
    const sum = [good, neutral, bad]
    return sum.reduce((total, sum) => total + sum, 0)
  }

  const countPositiveFeedbackPercentage = () => {
    const sum = countTotalFeedback()
    return sum === 0 ? 0 : Math.round((good / sum) * 100)
  }

  const controls = Object.keys({ good, neutral, bad })

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={controls} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  )
}

export default App

//==========oldClass
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }

//   handleIncrement = (e) => {
//     const name = e.target.name

//     this.setState((prevState) => ({
//       [name]: prevState[name] + 1,
//     }))
//   }

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state
//     const sum = [good, neutral, bad]
//     return sum.reduce((total, sum) => total + sum, 0)
//   }

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state

//     const sum = this.countTotalFeedback()

//     return sum === 0 ? 0 : Math.round((good / sum) * 100)
//   }

//   render() {
//     const controls = Object.keys(this.state)
//     const { good, neutral, bad } = this.state

//     console.log(controls)

//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={controls}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>
//         <Section title="Statistics">
//           {!this.countTotalFeedback() ? (
//             <Notification message="No feedback given" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </Container>
//     )
//   }
// }

// export default App
