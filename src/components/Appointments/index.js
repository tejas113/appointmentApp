import {Component} from 'react'

// eslint-disable-next-line
import {format} from 'date-fns'
// eslint-disable-next-line
import {v4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {titleInput: '', dateInput: '', appointmentsList: [{title: 'tejas'}]}

  titleText = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  dateText = event => {
    this.setState({
      dateInput: event.target.value,
    })
  }

  AddAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const newAppointment = {
      id: v4(),
      title: titleInput,
      date: dateInput,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  bringAppointments = () => {
    const {appointmentsList} = this.state
    appointmentsList.map(eachItem => (
      <AppointmentItem key={eachItem.id} details={eachItem} />
    ))
  }

  render() {
    // eslint-disable-next-line
    const {title, date, appointmentsList} = this.state
    return (
      <div className="mainContainer">
        <div className="secondContainer">
          <div className="entryAndPhoto">
            <form className="formEdit" onSubmit={this.AddAppointment}>
              <h1 className="headEdit">Add Appointment</h1>
              <div className="inputEDIT">
                <label htmlFor="input1">Title</label>
                <input
                  value={title}
                  onChange={this.titleText}
                  type="text"
                  id="input1"
                  className="input1Edit"
                />
              </div>
              <div className="inputEDIT">
                <label htmlFor="input2">DATE</label>
                <input
                  value={date}
                  onChange={this.dateText}
                  type="date"
                  className="input1Edit"
                />
              </div>
              <button className="btnEdit" type="submit">
                Add
              </button>
            </form>
            <img
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </div>
          <hr className="line" />
          <p>
            <span>{appointmentsList.length}</span>
          </p>
          <div className="appointmentsContainer">
            <div className="staredContainer">
              <h1 className="headEdit">Appointments</h1>
              <button className="btnEdit" type="button">
                Starred
              </button>
            </div>
            <ul className="ulEdit">{this.bringAppointments()}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
