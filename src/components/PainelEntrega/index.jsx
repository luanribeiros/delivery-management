import React from 'react'
import { Layout, Table, Tag } from 'antd'
import './style.scss'

const { Content } = Layout

const columns = [
  {
    title: 'Acompanhamento de Entregas',
    colSpan: 2,
    dataIndex: 'name',
    key: 'name'
  },
  {
    key: 'tags',
    colSpan: 0,
    dataIndex: 'tags',
    key: 'tags',
    render: tags => <Tag color='geekblue'> pendente </Tag>
  }
]

const dataSource = [
  {
    key: '1',
    name: 'Rua de Teste, 100'
  },
  {
    key: '2',
    name: 'Rua de Teste, 100'
  }
]

const PainelEntrega = () => {
  return (
    <Content className='Content'>
      <h1> Painel de Entregas </h1>

      <Table className='TablePainelEntrega' dataSource={dataSource} columns={columns} bordered />
    </Content>
  )
}

export default PainelEntrega
