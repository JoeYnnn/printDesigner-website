import { Table, Image } from 'antd';
import React from 'react';

const index = () => {
  const dataSource1 = [
    {
      key: '0-1',
      types: 'sessionStorageAuthorization',
      type: '使用链路',
    },
    {
      key: '0-2',
      types: 'sessionStorageAuthorization',
      type: '浏览器web端设计器',
    },
    {
      key: '0-3',
      types: 'sessionStorageAuthorization',
      type: '运行态web跨平台使用',
    },
    {
      key: '0-4',
      types: 'sessionStorageAuthorization',
      type: '集成方式',
    },
    {
      key: '1-0',
      types: 'sessionStorageAuthorization',
      type: '计算方式',
    },
    {
      key: '1-1',
      types: 'sessionStorageUserInfo',
      type: '性能',
    },
    {
      key: '1-2',
      types: 'id',
      type: '设计器易用性',
    },
    {
      key: '1-3',
      types: 'sessionStorageAuthorization',
      type: '对接成本',
    },
    {
      key: '1-4',
      types: 'sessionStorageUserInfo',
      type: '常见控件(线条/文本/图片/条码/复选框/表格/交叉表)',
    },
    {
      key: '1-5',
      types: 'id',
      type: '事件脚本',
    },
    {
      key: '1-6',
      types: 'sessionStorageAuthorization',
      type: '数据循环',
    },
    {
      key: '1-7',
      types: 'sessionStorageUserInfo',
      type: '套打',
    },
    {
      key: '1-8',
      types: 'id',
      type: '续打',
    },
    {
      key: '1-9',
      types: 'sessionStorageAuthorization',
      type: '补打',
    },
    {
      key: '1-10',
      types: 'sessionStorageUserInfo',
      type: '小票纸打印等特殊打印',
    },
    {
      key: '1-11',
      types: 'id',
      type: '核心特点',
    },
    {
      key: '1-12',
      types: 'sessionStorageAuthorization',
      type: '核心优势',
    },
    {
      key: '1-13',
      types: 'sessionStorageUserInfo',
      type: '模版维护',
    },
    {
      key: '1-14',
      types: 'id',
      type: '制作时机',
    },
    {
      key: '1-15',
      types: 'id',
      type: '问题点',
    },
  ];
  let arr: any = [];
  dataSource1.map((item, key) => {
    arr.push({
      key,
      comp: '',
      type:
        key <= 8 ? '调用方案' : key > 8 && key <= 15 ? '功能特性' : '优缺点',
      types: item.type,
      fast: '1',
      pango: '2',
    });
  });

  const sharedOnCell = (_: any, index: any) => {
    return {
      colSpan: 1,
    };
  };

  const columns1 = [
    {
      title: '对比',
      dataIndex: 'comp',
      key: 'comp',
      width: '10%',
      render: () => {
        return '特性对比';
      },
      colSpan: 3,
      onCell: (_: any, index: any) => {
        if (index === 0) {
          return {
            rowSpan: 20,
          };
        } else {
          return {
            rowSpan: 0,
          };
        }
      },
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      width: '10%',
      colSpan: 0,
      onCell: (_: any, index: any) => {
        if (index <= 8) {
          return {
            rowSpan: 9,
          };
        } else if (index > 8 && index <= 15) {
          return {
            rowSpan: 7,
          };
        } else {
          return {
            rowSpan: 4,
          };
        }
      },
    },
    {
      title: '分类项',
      dataIndex: 'types',
      key: 'types',
      width: '20%',
      colSpan: 0,
      onCell: sharedOnCell,
    },
    {
      title: 'fast report',
      dataIndex: 'fast',
      key: 'fast',
      width: '30%',
      onCell: sharedOnCell,
    },
    {
      title: 'pango print(wxp web打印)',
      dataIndex: 'pango',
      key: 'pango',
      width: '30%',
      onCell: sharedOnCell,
    },
  ];

  return (
    <div>
      {/* <Table
        dataSource={arr}
        columns={columns1}
        pagination={false}
        style={{ width: 1000 }}
        bordered
      /> */}
      <h1>特性对比</h1>
      <Image
        width={1000}
        height={600}
        src={require('../../image/对比1.jpg')}
      ></Image>

      <h1>概念对比</h1>
      <Image
        width={1000}
        height={550}
        src={require('../../image/对比2.jpg')}
      ></Image>
    </div>
  );
};

export default index;
