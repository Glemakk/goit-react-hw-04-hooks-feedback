import s from '../GradesBtn/GradesBtn.module.css'

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          className={s.button}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default FeedbackOptions
