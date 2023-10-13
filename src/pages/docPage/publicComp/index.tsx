import React from 'react';
import { Table } from 'antd';
const index = () => {
  //格式
  const dataSource = [
    {
      key: '1',
      name: '选择格式',
      description: '对应字段的格式处理',
      values: '无、数字、日期、时间',
    },
  ];

  //边框
  const dataSource1 = [
    {
      key: '1',
      name: '选择边框',
      description: '对应组件的边框样式',
      values: '各单独方向边框、全部边框 宽度、样式、颜色',
    },
  ];

  //字体
  const dataSource2 = [
    {
      key: '1',
      name: '字体',
      description: '对应组件的字体样式',
      values: '-',
    },
    {
      key: '2',
      name: '字号',
      description: '对应组件的字号',
      values: '-',
    },
    {
      key: '3',
      name: '颜色',
      description: '对应组件的字体颜色',
      values: '-',
    },
    {
      key: '4',
      name: '样式',
      description: '对应组件的字体样式',
      values: '普通、粗体、斜体、粗斜体',
    },
  ];

  //背景图片
  const dataSource3 = [
    {
      key: '1',
      name: '背景色',
      description: '背景色',
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
      name: '透明度',
      description: '图片透明度',
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
      values: '网络文件、本地文件、数据变量',
    },
    {
      key: '7',
      name: '水平',
      description: '图片水平方向的样式',
      values: '居左对齐、居中对齐、居右对齐',
    },
    {
      key: '8',
      name: '垂直',
      description: '图片垂直方向的样式',
      values: '顶端对齐、居中对齐、底端对齐',
    },
    {
      key: '9',
      name: '重复',
      description: '图片设置平铺',
      values: '不重复、横向平铺、纵向平铺、双向平铺',
    },
  ];

  //布局
  const dataSource4 = [
    {
      key: '1',
      name: '左',
      description: '组件距离父容器左边的距离',
      values: 'number',
    },
    {
      key: '2',
      name: '上',
      description: '组件距离父容器上边的距离',
      values: 'number',
    },
    {
      key: '3',
      name: '宽',
      description: '组件的宽',
      values: 'number',
    },
    {
      key: '4',
      name: '高',
      description: '组件的高',
      values: 'number',
    },
    {
      key: '7',
      name: '水平',
      description: '组件内容水平方向的样式',
      values: '居左对齐、居中对齐、居右对齐',
    },
    {
      key: '8',
      name: '垂直',
      description: '组件内容垂直方向的样式',
      values: '顶端对齐、居中对齐、底端对齐',
    },
  ];
  //文本打印样式
  const dataSource5 = [
    {
      key: '1',
      name: '自动大小',
      description: '单元格或者文本框随着文字内容多少进行大小调整',
      values: '原始控件尺寸、自动宽度、自动高度、空间不足时打到父容器',
    },
    {
      key: '2',
      name: '最大行数',
      description:
        '当自动大小设置为自动高度时，对文字内容的最大渲染行数进行限制，超过则截断',
      values: 'number',
    },
    {
      key: '3',
      name: '最大宽度',
      description:
        '当自动大小设置为自动宽度时，对文字内容的最大宽度进行限制，超过则截断',
      values: 'number',
    },
    {
      key: '4',
      name: '换行文本',
      description:
        '当单元格同一行其余兄弟单元格有换行时，当前单元格文本的渲染方式：可每行渲染，首尾行渲染，尾行渲染，默认所有行渲染',
      values: '默认、所有行显示、首行显示、尾行显示、首位行显示',
    },
    {
      key: '7',
      name: '页缝换行',
      description:
        '当渲染跨页时，在页缝处，如此单元格的兄弟单元格换行，即此单元格的此兄弟单元格在前一页有渲染，在后一页仍有渲染，则此单元格换行渲染的情况设置',
      values: '全部行显示、不显示、上页尾行显示、下页首行显示、页缝首位行显示',
    },
  ];
  //循环
  const dataSource6 = [
    {
      key: '1',
      name: '循环方向',
      description:
        '板或者表格的循环方向，默认先横向再纵向，即先往下渲染，再往右渲染；当使用"一式多份"打印时，可以按照要求，选择是先往右渲染再往下渲染还是先往下再往右',
      values: '先横向再纵向、横向、纵向',
    },
    {
      key: '2',
      name: '打印模式',
      description:
        '默认为只打一次。如选择了每页打印，则此行板(列板)每页均会打印，此功能常见于每组打印时需要打印每个分组的表头的情况',
      values: '只打一次、每页打印',
    },
    {
      key: '3',
      name: '最大水平打印次数',
      description: '"一式多份"打印模式下，表格最大水平方向能打多少次',
      values: 'number',
    },
    {
      key: '4',
      name: '最大垂直打印次数',
      description: '"一式多份"打印模式下，表格最大垂直方向能打多少次',
      values: 'number',
    },
    {
      key: '7',
      name: '空间不足时',
      description:
        ' 默认为父容器循环，设置为不再打印则如果仍有数据没有空间则停止打印，会丢失数据',
      values: '自动选择、不再打印、父容器循环',
    },
    {
      key: '8',
      name: '垂直间隔',
      description: '"一式多份"打印模式下，两个表格纵向间隔',
      values: 'number',
    },
    {
      key: '9',
      name: '水平间隔',
      description: '"一式多份"打印模式下，两个表格横向间隔',
      values: 'number',
    },
  ];

  const columns = [
    {
      title: '属性名',
      dataIndex: 'name',
      key: 'name',
      width: '10%',
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      width: '45%',
    },
    {
      title: '可选值',
      dataIndex: 'values',
      key: 'values',
      width: '45%',
    },
  ];

  return (
    <div>
      <h2>格式</h2>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        style={{ width: 1000 }}
      />

      <h2>边框</h2>
      <Table
        dataSource={dataSource1}
        columns={columns}
        pagination={false}
        style={{ width: 1000 }}
      />

      <h2>字体</h2>
      <Table
        dataSource={dataSource2}
        columns={columns}
        pagination={false}
        style={{ width: 1000 }}
      />

      <h2>背景图片</h2>
      <Table
        dataSource={dataSource3}
        columns={columns}
        pagination={false}
        style={{ width: 1000 }}
      />

      <h2>布局</h2>
      <Table
        dataSource={dataSource4}
        columns={columns}
        pagination={false}
        style={{ width: 1000 }}
      />

      <h2>文本打印样式</h2>
      <Table
        dataSource={dataSource5}
        columns={columns}
        pagination={false}
        style={{ width: 1000 }}
      />

      <h2>循环</h2>
      <Table
        dataSource={dataSource6}
        columns={columns}
        pagination={false}
        style={{ width: 1000 }}
      />
    </div>
  );
};

export default index;
