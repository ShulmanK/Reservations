export const getReservations = () => {
  return fetch('http://localhost:4000/reservations').then((res) => res.json())
}

export const createReservation = (data) => {
  return fetch('http://localhost:4000/reservations/create', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const getReservation = (id) => {
  return fetch(`http://localhost:4000/reservations/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}

export const editReservation = (data, id) => {
  return fetch(`http://localhost:4000/reservations/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const deleteReservation = (id) => {
  return fetch(`http://localhost:4000/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
}
