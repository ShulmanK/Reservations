const mongoose = require('mongoose')

const Reservation = mongoose.Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		startDate: { type: Date, required: true },
		endDate: { type: Date, required: true },
		phoneNumber: { type: Number, required: true },
		email: { type: String, required: true },
		guests: { type: Number, required: true },
		price: { type: Number, required: true },
		country: { type: String, required: true },
		city: { type: String, required: true },
	  },
	  {
		timestamps: true,
	  }
)

module.exports = mongoose.model('Reservation', Reservation)