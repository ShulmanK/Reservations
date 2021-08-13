import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import moment from 'moment'
import {getReservations} from '../../api/api'
import './ReservarionListStyles.css'

export const ReservationsList = () => {
  const history = useHistory()
  const [reservations, setFormValues] = useState([])
  useEffect(() => {
    let mounted = true
    getReservations().then((reservations) => {
      if (mounted) {
        setFormValues(reservations)
      }
    })
    return () => (mounted = false)
  }, [])
  const navToCreatePage = () => {
    history.push(`/create`)
  }
  const viewReservation = (id) => {
	history.push(`/view/${id}`)
  }
  return (
    <div className="container">
      <div className="title">RESERVATIONS</div>
      <div className="buttonSection">
	  
        <button className="addButton" onClick={() => navToCreatePage()}>
		<i className="fas fa-plus-square"></i>
          Add Reservation
        </button>
      </div>

      {reservations.length > 0 && (
        <div className="table">
          <div className="tableHeader">
            <div>FIRST NAME</div>
            <div>LAST NAME</div>
            <div>EMAIL</div>
            <div>PHONE</div>
            <div>GUESTS</div>
            <div>CHECK-IN</div>
            <div>CHECK-OUT</div>
          </div>
          {reservations.map((res, index) => {
            const {
              firstName,
              lastName,
              email,
              phoneNumber,
              guests,
              startDate,
              endDate,
			  _id
            } = res
            return (
              <div key={index} onClick={() => viewReservation(_id)}>
                <div className="tableLines">
                  <div>{firstName}</div>
                  <div>{lastName}</div>
                  <div>{email}</div>
                  <div>{phoneNumber}</div>
                  <div>{guests}</div>
                  <div>{moment(startDate).format("DD MMM YY")}</div>
                  <div>{moment(endDate).format("DD MMM YY")}</div>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {reservations.length === 0 && <div className="title">Reservations are not opened yet</div>}
    </div>
  )
}
