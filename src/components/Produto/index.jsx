import React from 'react'
import { Layout, Table, Icon, Input, Button } from 'antd'
import './style.scss'

const { Content } = Layout

const columns = [
  {
    title: 'Lista de Produtos',
    colSpan: 3,
    dataIndex: 'name',
    key: 'name'
  },
  {
    key: 'edit',
    colSpan: 0,
    dataIndex: 'edit',
    key: 'edit',
    render: edit => (
      <a>
        <Icon type='edit' />
      </a>
    )
  },
  {
    key: 'delete',
    colSpan: 0,
    dataIndex: 'delete',
    key: 'delete',
    render: del => (
      <a>
        <Icon type='delete' />
      </a>
    )
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
  },
  {
    key: '3',
    name: 'Rua de Teste, 100'
  }
]

const Produto = () => {
  return (
    <Content className='Content'>
      <h1> Produtos </h1>

      <section className='BgProdutoForm'>
        <section>
          <div>
            <label>
              Descrição: <br />
              <Input
                placeholder='Digite a descrição do produto'
                className='Input'
              />
            </label>
          </div>

          <div>
            <label>
              Preço:
              <br />
              <Input placeholder='Ex.: R$ 99,99' className='InputLast' />
            </label>
          </div>
        </section>
        <Button type='primary'> Salvar </Button>
      </section>

      <Table
        className='TableProduto'
        dataSource={dataSource}
        columns={columns}
        bordered
      />
    </Content>
  )
}

export default Produto
