const router = require('express').Router()
const Reservation = require('../models/Reservation')

router.route('/').get(async (req, res) => {
  try {
    const reservations = await Reservation.find()
    await res.json(reservations)
  } catch (err) {
    console.log(`Error occured during loading reservations, ${err}`)
    res.status(400).json(`Error: ${err}`)
  }
})

router.route('/create').post(async (req, res) => {
  try {
    const body = req.body
    const {
      firstName,
      lastName,
      startDate,
      endDate,
      phoneNumber,
      email,
      guests,
      price,
      country,
      city,
    } = body

    const newReservation = new Reservation({
      firstName,
      lastName,
      startDate,
      endDate,
      phoneNumber,
      email,
      guests,
      price,
      country,
      city,
    })

    await newReservation.save()
    await res.json('Reservation was created successfully')
  } catch (err) {
    console.log(`Error occured during creating reservation, ${err}`)
    res.status(400).json(`Error: ${err}`)
  }
})
router.route('/:id').get(async (req, res) => {
	try{
		const id = req.params.id
		const reservation = await Reservation.findById(id)
		await res.json(reservation)
	}catch(err){
		console.log(`Error occured during loading reservation, ${err}`)
		res.status(400).json(`Error: ${err}`)
	}
})

router.route('/:id').delete(async (req, res) => {
	try{
		const id = req.params.id
		await Reservation.findByIdAndDelete(id)
		await res.json('Reservation was created successfully')
	}catch(err){
		console.log(`Error occured during deleting reservation, ${err}`)
		res.status(400).json(`Error: ${err}`)
	}
})

router.route('/:id').put(async (req, res) => {
	try{
		const id = req.params.id
		const reservationToUpdate = req.body
		await Reservation.findByIdAndUpdate(id, reservationToUpdate)
		await res.json('Reservation was created successfully')
	}catch(err){
		console.log(`Error occured during updating reservation, ${err}`)
		res.status(400).json(`Error: ${err}`)
	}
})


module.exports = router
