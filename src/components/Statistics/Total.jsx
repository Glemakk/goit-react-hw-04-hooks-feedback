import PropTypes from 'prop-types'

const Total = ({ total }) => {
  return (
    <>
      <li>
        <p>
          Total: <span>{total}</span>
        </p>
      </li>
    </>
  )
}
Total.propTypes = {
  total: PropTypes.number.isRequired,
}

export default Total
