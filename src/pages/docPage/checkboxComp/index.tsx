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
      name: '折行间距',
      description: '选择折行之后生效，为各行之间距离',
      values: 'number',
    },
    {
      key: '3',
      name: '列距',
      description: '每列之间的距离',
      values: 'number',
    },
    {
      key: '4',
      name: '自动尺寸',
      description:
        '复选框右侧放置文本的位置宽度依据文本内容自动调整，正常情况下此字段需选择"是"',
      values: '是/否',
    },
    {
      key: '5',
      name: '竖向排版',
      description: '从上到下排列',
      values: '是/否',
    },
    {
      key: '6',
      name: '显示级别',
      description: '组件的显示方式',
      values: '不显示、除首级外、全显示、仅末级',
    },
    {
      key: '7',
      name: '选择形状',
      description: '文本前勾选框的样式',
      values: '圆形/矩形',
    },
    {
      key: '8',
      name: '选择填充',
      description: '文本前勾选框内的充填物',
      values: '勾选、半实心、全实心、字符充填',
    },
    {
      key: '9',
      name: '隐藏选中框',
      description: '是否隐藏选中框',
      values: '是/否',
    },
    {
      key: '10',
      name: '子项括号',
      description:
        '复选框单个选项内有子项时的子项括号，目前此属性暂未开放，维持默认值即可',
      values: '小括号、中括号、大括号、尖括号',
    },
    {
      key: '11',
      name: '子项连接',
      description: '横向排版时每项之间的分隔符',
      values: '空格、逗号、点',
    },
    {
      key: '12',
      name: '隐藏未选中',
      description: '未选中的子项是否隐藏',
      values: '是/否',
    },
    {
      key: '13',
      name: '复选框宽',
      description: '复选框的方格宽度',
      values: '正常情况需与字体字号相匹配',
    },
    {
      key: '14',
      name: '复选框高',
      description: '复选框的方格高度',
      values: '正常情况需与字体字号相匹配',
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
