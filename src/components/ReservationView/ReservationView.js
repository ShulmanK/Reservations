import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import moment from 'moment'
import {getReservation} from '../../api/api'
import './ReservationViewStyles.css'

export const ReservationView = ({match}) => {
  const history = useHistory()
  const id = match.params.id
  const backToMainPage = () => {
    history.push('/')
  }
  const navToEditPage = () => {
    history.push(`/edit/${id}`)
  }
  const [reservation, setReservation] = useState({})
  useEffect(() => {
    if (id) {
      let mounted = true
      getReservation(id).then((reservation) => {
        if (mounted) {
          const startDateValid = moment(reservation.startDate).format(
            'DD MMM YY'
          )
          const endDateValid = moment(reservation.endDate).format('DD MMM YY')
          const validObject = {
            ...reservation,
            startDate: startDateValid,
            endDate: endDateValid,
          }
          setReservation(validObject)
        }
      })
      return () => (mounted = false)
    }
  }, [id])
  return (
    <div className="container">
      <div
        className="title"
        style={{cursor: 'pointer'}}
        onClick={backToMainPage}
      >
        ← RESERVATION
      </div>
      <div className="buttonSection">
        <button className="editButton" onClick={() => navToEditPage()}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
      </div>

      {reservation && (
        <div className="reservationCard">
          <div className="contact">
            {reservation.firstName} {reservation.lastName}
          </div>
          <div className="details">
            <div>
              <div className="label">Phone:</div>
              <div className="info">{reservation.phoneNumber}</div>
            </div>
            <div>
              <div className="label">Email:</div>
              <div className="info">{reservation.email}</div>
            </div>
          </div>

          <div className="details">
            <div>
              <div className="label">Country:</div>
              <div className="info">{reservation.country}</div>
            </div>
            <div>
              <div className="label">City:</div>
              <div className="info">{reservation.city}</div>
            </div>
          </div>
          <div className="details">
            <div>
              <div className="label">Guests:</div>
              <div className="info">{reservation.guests}</div>
            </div>
            <div>
              <div className="label">Dates:</div>
              <div className="info">
                {reservation.startDate} - {reservation.endDate}
              </div>
            </div>
          </div>
          <div className="price">Price: {reservation.price} $</div>
        </div>
      )}
    </div>
  )
}
