import React from 'react'
import {useHistory} from 'react-router-dom'
import {ReservationForm} from '../ReservationForm/ReservationForm'
import {editReservation} from '../../api/api'

export const ReservationEdit = ({match}) => {
  const id = match.params.id
  const history = useHistory()
  const onSubmit = async data => {
    await editReservation(data, id)
	history.push('/')
  }
  const backToMainPage = () => {
	history.push('/')
}

  return (
    <div className="container">
      <div className="title" style={{cursor: "pointer"}} onClick={backToMainPage}>← RESERVATION</div>

      <ReservationForm onSubmit={onSubmit} id={id} type="Update" />
    </div>
  )
}
