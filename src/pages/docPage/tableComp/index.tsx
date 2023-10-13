import React from 'react';
import { Table } from 'antd';
const index = () => {
  const dataSource = [
    {
      key: '1',
      name: '数据节点',
      description: '要绑定的业务数据节点名称',
      values: '-',
    },
    {
      key: '2',
      name: '横向延展',
      description: '表格是否向右循环，默认是向下循环',
      values: '是/否',
    },
    {
      key: '3',
      name: '最大高度',
      description: '属性暂未开放',
      values: '-',
    },
  ];
  const columns = [
    {
      title: '属性名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '可选值',
      dataIndex: 'values',
      key: 'values',
    },
  ];

  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        style={{ width: 1000 }}
      />
    </>
  );
};

export default index;
