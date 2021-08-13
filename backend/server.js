const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const reservationsRouter = require('./routes/reservations')

mongoose.connect('mongodb://127.0.0.1:27017/reservations', {
  useNewUrlParser: true,
})
mongoose.connection.once('open', () => {
  console.log('Mongodb connection established successfuly')
})

const PORT = 4000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/reservations', reservationsRouter)

app.get('/', async (req, res)=> {
    res.json('You do not have permissions')
})

app.listen(PORT, () => {
  console.log('Server is ready on port', PORT)
})
