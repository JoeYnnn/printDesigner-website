import React from 'react';
import { Table } from 'antd';
const index = () => {
  const dataSource = [
    {
      key: '1',
      name: '自动折行',
      description: '文字超出是否换行',
      values: '是/否',
    },
    {
      key: '2',
      name: '自动尺寸',
      description: '格子自动充填和均分当前框体',
      values: '是/否',
    },
    {
      key: '3',
      name: '格子形状',
      description: '格子形状',
      values: '矩形、圆角矩形、圆形',
    },
    {
      key: '4',
      name: '格子数量',
      description: '编码组格子数量',
      values: 'number',
    },
    {
      key: '5',
      name: '格子宽',
      description: '编码自格子宽度',
      values: 'number',
    },
    {
      key: '6',
      name: '格子高',
      description: '编码自格子高度',
      values: 'number',
    },
    {
      key: '7',
      name: '显示边框',
      description: '是否显示格子边框',
      values: '是/否',
    },
    {
      key: '8',
      name: '边框颜色',
      description: '边框颜色',
      values: '-',
    },
    {
      key: '9',
      name: '边框宽',
      description: '边框宽',
      values: '0.5pt-8pt',
    },
    {
      key: '10',
      name: '充填类型',
      description: '格子内容填充物',
      values: '字符充填、勾选、半实心、全实心',
    },
    {
      key: '11',
      name: '格子间距',
      description: '格子间距',
      values: 'number',
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
