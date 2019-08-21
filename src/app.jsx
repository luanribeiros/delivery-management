import React, { useState } from 'react'
import { Layout, Menu, Icon } from 'antd'
import Routes from './routes.jsx'
import { BrowserRouter, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar/index.jsx'
import HeaderApp from './components/Header/index.jsx'

const { Header, Sider } = Layout

const App = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <BrowserRouter>
      <Layout className='Layout'>
       <Sidebar collapsed={collapsed} />
        <Layout>
            <HeaderApp collapsed={collapsed} toggle={toggle} />
            <Routes />
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}

export default App
