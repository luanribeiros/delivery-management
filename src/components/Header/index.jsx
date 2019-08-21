import React, { useState } from 'react'
import { Layout, Icon } from 'antd'

const { Header } = Layout

const HeaderApp = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Header style={{ background: '#fff', paddingLeft: '1em' }}>
      <Icon
        className='trigger'
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />{' '}
      Challenge Interakt
    </Header>
  )
}

export default HeaderApp
