import s from './Notification.module.css'

function Notification({ message }) {
  return <div className={s.notification}>{message}</div>
}

export default Notification
