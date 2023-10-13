import React from 'react';
import { Table } from 'antd';
const index = () => {
  const dataSource = [
    {
      key: '1',
      name: '符号形状',
      description: '标记符样式',
      values: '小括号、中括号、大括号',
    },
    {
      key: '2',
      name: '右侧符号',
      description: '符号方向',
      values: '左侧/右侧',
    },
    {
      key: '3',
      name: '线型',
      description: '符号线条样式',
      values: '实线、点线、短划线、点划线、长划线、双点划线',
    },
    {
      key: '4',
      name: '线宽',
      description: '标记符线宽',
      values: '0.25-10',
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
