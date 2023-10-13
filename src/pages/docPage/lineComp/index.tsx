import React from 'react';
import { Table } from 'antd';
const index = () => {
  const dataSource = [
    {
      key: '1',
      name: '线型',
      description: '线条显示样式',
      values: '实线、点线、短划线、点切线、长划线、双点划线',
    },
    {
      key: '2',
      name: '线宽',
      description: '线条显示宽度',
      values: '0.25-10.0',
    },
    {
      key: '3',
      name: '方向',
      description: '线条显示方向',
      values: '水平线、竖直线、左斜线、右斜线',
    },
    {
      key: '4',
      name: '汇合端点',
      description: '多分区时端点所处位置',
      values: '平行、起点相同、终点相同',
    },
    {
      key: '5',
      name: '分区数',
      description: '将线条组件分为若干部分',
      values: '1-10',
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
