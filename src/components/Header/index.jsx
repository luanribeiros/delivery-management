import React from 'react'
import { Layout, Icon } from 'antd'

const { Header } = Layout

const HeaderApp = ({ collapsed, toggle }) => (
    <Header style={{ background: '#fff', paddingLeft: '0' }}>
      <Icon
        className='Trigger'
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />
      INTERAKT Challenge
    </Header>
)

export default HeaderApp
