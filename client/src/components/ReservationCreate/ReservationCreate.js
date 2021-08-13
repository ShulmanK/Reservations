import React from 'react'
import {useHistory} from 'react-router-dom'
import {ReservationForm} from '../ReservationForm/ReservationForm'
import {createReservation} from '../../api/api'
import './ReservationCreateStyles.css'

export const ReservationCreate = () => {
  const history = useHistory()
  const onSubmit = async (data) => {
    await createReservation(data)
    history.push('/')
  }
  const backToMainPage = () => {
	  history.push('/')
  }
  return (
    <div className="container">
      <div className="title" style={{cursor: "pointer"}} onClick={backToMainPage}>← RESERVATION</div>
      <ReservationForm onSubmit={onSubmit} type="Create" />
    </div>
  )
}
