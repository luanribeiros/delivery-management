import React from 'react'
import { Layout, Table, Icon, Input, Select, DatePicker } from 'antd'
import './style.scss'

const { Content } = Layout

const columns = [
  {
    title: 'Entregas',
    colSpan: 3,
    dataIndex: 'name',
    key: 'name'
  },
  {
    key: 'edit',
    colSpan: 0,
    dataIndex: 'edit',
    key: 'edit',
    render: edit => <a><Icon type='edit' /></a>
  },
  {
    key: 'delete',
    colSpan: 0,
    dataIndex: 'delete',
    key: 'delete',
    render: del => <a><Icon type='delete' /></a>
  },
]

const dataSource = [
  {
    key: '1',
    name: 'Rua de Teste, 100'
  },
  {
    key: '2',
    name: 'Rua de Teste, 100'
  },
  {
    key: '3',
    name: 'Rua de Teste, 100'
  }
]

const Entrega = () => {
  return (
    <Content className='Content'>
      <h1> Entrega </h1>

      <section>
        <Input placeholder="placeholder" />
        <Select style={{ width: '32%' }}>
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
        <DatePicker />
      </section>

      <Table className='TableEntrega' dataSource={dataSource} columns={columns} bordered />
    </Content>
  )
}

export default Entrega
