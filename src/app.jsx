import React, { useState } from 'react'
import { Layout } from 'antd'

import Sidebar from './components/Sidebar/index.jsx'
import Header from './components/Header/index.jsx'
import Routes from './routes.jsx'

const App = () => (
    <Layout
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: '0',
        left: '0'
      }}
    >
      <Sidebar />
      <Layout>
        <Header />
        <Routes />
      </Layout>
    </Layout>
)

export default App
