import PropTypes from 'prop-types'

const StatisticsItem = ({ good, neutral, bad }) => {
  return (
    <>
      <li>
        <p>
          Goog: <span>{good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad: <span>{bad}</span>
        </p>
      </li>
    </>
  )
}
StatisticsItem.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
}

export default StatisticsItem
