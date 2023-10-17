import React from 'react';
import { Table } from 'antd';
const index = () => {
  const dataSource = [
    {
      key: '1',
      name: '替换文本',
      description: '图片未加载时候展示的文字内容',
      values: 'string',
    },
    {
      key: '2',
      name: '宽度',
      description: '图片的宽',
      values: 'number',
    },
    {
      key: '3',
      name: '高度',
      description: '图片的高',
      values: 'number',
    },
    {
      key: '4',
      name: '旋转角度',
      description: '图片旋转的角度',
      values: 'number',
    },
    {
      key: '5',
      name: '缩放方式',
      description: '图片缩放的方式',
      values: '等比例缩放、拉伸缩放、原始尺寸',
    },
    {
      key: '6',
      name: '类型',
      description: '图片源',
      values: '本地文件、数据变量(格式为base64或URL)',
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
