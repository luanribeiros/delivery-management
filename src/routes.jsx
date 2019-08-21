import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router'

import PainelEntrega from './components/PainelEntrega/index.jsx'
import Entrega from './components/Entrega/index.jsx'
import Produto from './components/Produto/index.jsx'

const Routes = () => {
  return (
      <Switch>
        <Route path='/' exact component={PainelEntrega} />
        <Route path='/entrega' exact component={Entrega} />
        <Route path='/produto' exact component={Produto} />
        <Redirect from='*' to='/' />
      </Switch>
  )
}

export default Routes
