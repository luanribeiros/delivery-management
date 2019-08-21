import React from 'react'
import { render } from 'react-dom'
import 'babel-polyfill'

import './assets/css/reset.css'
import './assets/css/styles.scss'
import 'antd/dist/antd.css'

import App from './app.jsx'

render(<App />, document.querySelector('[data-js="app"]'))

if (module && distdismodule.hot) module.hot.accept()
