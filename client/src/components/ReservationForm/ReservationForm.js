import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import moment from 'moment'
import 'react-dates/initialize'
import {DateRangePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import {getReservation, deleteReservation} from '../../api/api'
import './ReservationFormStyles.css'

export const ReservationForm = ({onSubmit, id}) => {
  const history = useHistory()
  const submitHandler = (event) => {
    event.preventDefault()
    const startDateValid = startDate.toDate()
    const endDateValid = endDate.toDate()
	const reservationToCreate = {...form}
	reservationToCreate.startDate = startDateValid
	reservationToCreate.endDate = endDateValid
    onSubmit(reservationToCreate)
  }
  const deleteReservationHandler = () => {
    deleteReservation(id).then(() => history.push('/'))
  }
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [focusedInput, setFocusedInput] = useState()
  const [form, setFormValues] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    guests: '',
    price: '',
    country: '',
    city: '',
  })

  useEffect(() => {
    if (id) {
      let mounted = true
      getReservation(id).then((reservation) => {
        if (mounted) {
          const validObject = {...reservation}
          setFormValues(validObject)
          setStartDate(moment(reservation.startDate))
          setEndDate(moment(reservation.endDate))
        }
      })
      return () => (mounted = false)
    }
  }, [id])

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="functionSection">
          <div className="fullName">
            {form.firstName} {form.lastName}
          </div>
          <div className="buttonsSection">
            <button
              className="deleteButton"
              onClick={() => deleteReservationHandler()}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button className="saveButton" type="submit">
              <i className="far fa-save"></i>
              Save
            </button>
          </div>
        </div>
        <div className="bookerSection">
          <div className="formSection">
            <div className="inputField">
              <label htmlFor="firstName">First Name</label>
              <input
                style={{display: 'block'}}
                placeholder="First Name"
                type="text"
                id="firstName"
                value={form.firstName}
                onChange={(event) =>
                  setFormValues({...form, firstName: event.target.value})
                }
              />
            </div>
            <div className="inputField">
              <label htmlFor="lastName">Last Name</label>
              <input
                style={{display: 'block'}}
                placeholder="Last Name"
                type="text"
                id="lastName"
                value={form.lastName}
                onChange={(event) =>
                  setFormValues({...form, lastName: event.target.value})
                }
              />
            </div>

            <div className="inputField">
              <label htmlFor="phoneNumber">Phone</label>
              <input
                style={{display: 'block'}}
                placeholder="Phone Number"
                type="text"
                id="phoneNumber"
                value={form.phoneNumber}
                onChange={(event) =>
                  setFormValues({...form, phoneNumber: event.target.value})
                }
              />
            </div>
            <div className="inputField">
              <label htmlFor="email">Email</label>
              <input
                style={{display: 'block'}}
                placeholder="Email"
                type="text"
                id="email"
                value={form.email}
                onChange={(event) =>
                  setFormValues({...form, email: event.target.value})
                }
              />
            </div>
          </div>
          <div className="formSectionData">
            <div className="inputField">
              <label htmlFor="country">Country</label>
              <input
                style={{display: 'block'}}
                placeholder="Country"
                type="text"
                id="country"
                value={form.country}
                onChange={(event) =>
                  setFormValues({...form, country: event.target.value})
                }
              />
            </div>
            <div className="inputField">
              <label htmlFor="city">City</label>
              <input
                style={{display: 'block'}}
                placeholder="City"
                type="text"
                id="city"
                value={form.city}
                onChange={(event) =>
                  setFormValues({...form, city: event.target.value})
                }
              />
            </div>

            <div>
              <div style={{fontSize: "13px"}}>Dates</div>
              <DateRangePicker
                startDate={startDate}
                startDateId="start-date"
                endDate={endDate}
                endDateId="end-date"
                onDatesChange={({startDate, endDate}) => {
                  setStartDate(startDate)
                  setEndDate(endDate)
                }}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
              />
            </div>
          </div>
          <div className="formSection">
            <div className="inputField">
              <label htmlFor="guests">Guests</label>
              <input
                style={{display: 'block'}}
                placeholder="Guests"
                type="text"
                id="guests"
                value={form.guests}
                onChange={(event) =>
                  setFormValues({...form, guests: event.target.value})
                }
              />
            </div>
            <div className="inputField">
              <label htmlFor="price">Price</label>
              <input
                style={{display: 'block'}}
                placeholder="Price"
                type="text"
                id="price"
                value={form.price}
                onChange={(event) =>
                  setFormValues({...form, price: event.target.value})
                }
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
