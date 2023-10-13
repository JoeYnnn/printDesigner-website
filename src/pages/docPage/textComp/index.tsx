import React from 'react';
import { Table } from 'antd';
const index = () => {
  const dataSource = [
    {
      key: '1',
      name: '竖向排版',
      description: '文字展示方向',
      values: '是/否',
    },
    {
      key: '2',
      name: '自动缩印',
      description: '按比例缩放文字，使其展示在控件内(竖向排版不生效)',
      values: '是/否',
    },
    {
      key: '3',
      name: '自动折行',
      description: '文本超出控件之后自动换行(竖向排版不生效)',
      values: '是/否',
    },
    {
      key: '4',
      name: '首行缩进',
      description: '文本首行缩进距离(竖向排版不生效)',
      values: 'number',
    },
    {
      key: '5',
      name: '折行间距',
      description: '选择折行之后生效，为各行之间距离',
      values: 'number',
    },
    {
      key: '6',
      name: '文本超出',
      description: '文本超出组件的显示方式',
      values: '无、省略号、截断内容、显示出界',
    },
    {
      key: '7',
      name: '下划线长',
      description: '文本的下划线',
      values: '按文本宽度/按控件宽度',
    },
    {
      key: '8',
      name: '删除线',
      description: '文本的删除线',
      values: '单线/双线',
    },
    {
      key: '9',
      name: '旋转角度',
      description: '文本的旋转角度',
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
