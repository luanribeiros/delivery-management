import React from 'react'
import { Layout, Table, Icon, Input, Select, DatePicker, Button } from 'antd'
import './style.scss'

const { TextArea } = Input
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

const Entrega = () => {
  return (
    <Content className='Content'>
      <h1> Entregas </h1>

      <section className='BgEntrega'>
        <section className='BgEntregaForm'>
          <label>
            Local: <br />
            <Input
              placeholder='Digite o local da entrega a ser realizada'
              className='Input'
            />
          </label>
          <section className='BgEntregaEntregador'>
            <div>
              <label>
                Entregador:
                <br />
                <Select
                  style={{ width: '250px' }}
                  className='Select'
                  placeholder='Selecione o entregador'
                >
                  <Option value='rmb'>RMB</Option>
                  <Option value='dollar'>Dollar</Option>
                </Select>
              </label>
            </div>
            <div>
              <label>
                Data:
                <br />
                <DatePicker className='DatePicker' />
              </label>
            </div>
          </section>
          <label>
            Produtos: <br />
            <Select
              style={{ width: '100%' }}
              className='Select'
              placeholder='Selecione o entregador'
            >
              <Option value='rmb'>RMB</Option>
              <Option value='dollar'>Dollar</Option>
            </Select>
          </label>
          <br />
          <label>
            Descrição: <br />
            <TextArea
              rows={4}
              placeholder='ok'
              className='TextArea'
              placeholder='Escreva observações sobre a entrega a ser feita'
            />
          </label>

          <Button type='primary'> Salvar </Button>
        </section>

        <Table
          className='TableEntrega'
          dataSource={dataSource}
          columns={columns}
          bordered
        />
      </section>
    </Content>
  )
}

export default Entrega
