import React from 'react';
import { Space, Table, Tag } from 'antd';
import {
  UserAddOutlined,
  UserOutlined,
  UserSwitchOutlined,
  UserDeleteOutlined
} from "@ant-design/icons";

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Count',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: 'State',
    key: 'state',
    dataIndex: 'state',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length == "Avalaible" ? 'green' : 'volcano';
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a href=""><UserOutlined /></a>
        <a><UserSwitchOutlined /></a>
        <a href=""><UserDeleteOutlined /></a>
      </Space>
    ),
  },
];

const data = [
  {
    id: '1',
    product: 'CPU',
    count: 32,
    tags: ['Avalaible'],
  },
  {
    id: '2',
    product: 'CPU',
    count: 32,
    tags: ['Avalaible'],
  },
  {
    id: '3',
    product: 'CPU',
    count: 32,
    tags: ['Unavalaible'],
  },
  {
    id: '4',
    product: 'CPU',
    count: 32,
    tags: ['Avalaible'],
  },
  {
    id: '5',
    product: 'CPU',
    count: 32,
    tags: ['Avalaible'],
  },
  {
    id: '5',
    product: 'CPU',
    count: 32,
    tags: ['Avalaible'],
  },
];

const pagination = {
  pageSize: 5,
  total: data.length,
  position: ['bottomCenter']
};

export const ListService = () => {
  return (
    <div>
    <a><UserAddOutlined /></a>
    <Table columns={columns} dataSource={data} pagination={pagination}/>
    </div>
  )
}