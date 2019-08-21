import React, { useState } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const { Sider } = Layout

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div
        className='logo'
        style={{
          height: '32px',
          background: 'rgba(255, 255, 255, 0.2)',
          margin: '16px'
        }}
      />
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
        <Menu.Item key='1'>
          <Link to='/painel-produto'>
            <Icon type='home' /> <span> Painel de Entregas </span>
          </Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/entrega'>
            <Icon type='file' /> <span> Entregas </span>
          </Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <Link to='/produto'>
            <Icon type='profile' /> <span> Produtos </span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
