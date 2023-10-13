import React from 'react';
import { Table } from 'antd';
const index = () => {
  const dataSource = [
    {
      key: '1',
      name: '编码类型',
      description: '条形码显示方式',
      values:
        'Codabar、' +
        'Code39、' +
        'Code128、' +
        'EAN13、' +
        'PDF417、' +
        'QR、' +
        'DataMatrix',
    },
    {
      key: '2',
      name: '文本显示',
      description: '条形码文字描述是否显示',
      values: '是/否',
    },
    {
      key: '3',
      name: 'QR容错级别',
      description: '编码类型为QR时候生成的二维码容错级别',
      values: 'L级(7%)、' + 'M级(15%)、' + 'Q级(20%)、' + 'H级(25%)',
    },
    {
      key: '4',
      name: '旋转角度',
      description: '条形码旋转角度',
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
