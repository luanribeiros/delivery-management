import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import PainelEntrega from './components/PainelEntrega/index.jsx'
import Entrega from './components/Entrega/index.jsx'
import Produto from './components/Produto/index.jsx'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/painel-entrega' exact component={PainelEntrega} />
        <Route path='/entrega' exact component={Entrega} />
        <Route path='/produto' exact component={Produto} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
