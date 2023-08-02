import './index.css'

const AppointmentItem = props => {
  const {details} = props
  // eslint-disable-next-line
  const {title, id} = details
  return (
    <li>
      <div className="box">
        <h1>{title}</h1>
      </div>
    </li>
  )
}

export default AppointmentItem
