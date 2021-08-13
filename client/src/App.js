import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {ReservationCreate} from './components/ReservationCreate/ReservationCreate'
import {ReservationEdit} from './components/ReservationEdit/ReservationEdit'
import {ReservationView} from './components/ReservationView/ReservationView'
import {ReservationsList} from './components/ReservationList/ReservationsList'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ReservationsList} />
        <Route exact path="/edit/:id" component={ReservationEdit} />
        <Route exact path="/create" component={ReservationCreate} />
        <Route exact path="/view/:id" component={ReservationView} />
      </Switch>
    </div>
  )
}

export default App
