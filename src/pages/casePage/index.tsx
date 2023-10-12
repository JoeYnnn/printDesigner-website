import { Image, Tree } from 'antd';
import styles from './index.less';
import { useState } from 'react';
const treeData = [
  {
    key: `1`,
    title: `使用简单控件`,
    children: [
      {
        key: `1-0`,
        title: `线条`,
        children: [],
      },
      {
        key: `1-1`,
        title: `文本框`,
        children: [],
      },
      {
        key: `1-2`,
        title: `复选框`,
        children: [],
      },
      {
        key: `1-3`,
        title: `图片`,
        children: [],
      },
      {
        key: `1-4`,
        title: `面板`,
        children: [],
      },
    ],
  },
  {
    key: `2`,
    title: `使用脚本打印`,
    children: [
      {
        key: `2-0`,
        title: `动态设置边框`,
        children: [],
      },
      {
        key: `2-1`,
        title: `动态设置字体`,
        children: [],
      },
      {
        key: `2-2`,
        title: `动态变量赋值`,
        children: [],
      },
      {
        key: `2-3`,
        title: `表格合计等`,
        children: [],
      },
    ],
  },
  {
    key: `3`,
    title: `使用简单表格`,
    children: [
      {
        key: `3-1`,
        title: `简单表格使用`,
        children: [],
      },
      {
        key: `3-2`,
        title: `横向表格(行板)`,
        children: [],
      },
      {
        key: `3-3`,
        title: `纵向表格(列板)`,
        children: [],
      },
    ],
  },
  {
    key: `4`,
    title: `使用文本打印样式`,
    children: [
      {
        key: `4-1`,
        title: `自动大小`,
        children: [],
      },
      {
        key: `4-2`,
        title: `最大行数`,
        children: [],
      },
      {
        key: `4-3`,
        title: `最大宽度`,
        children: [],
      },
      {
        key: `4-4`,
        title: `换行文本`,
        children: [],
      },
      {
        key: `4-5`,
        title: `页缝换行`,
        children: [],
      },
    ],
  },
  {
    key: `5`,
    title: `使用循环打印样式`,
    children: [
      {
        key: `5-1`,
        title: `循环方向`,
        children: [],
      },
      {
        key: `5-2`,
        title: `每页打印`,
        children: [],
      },
      {
        key: `5-3`,
        title: `最大水平、垂直打印设置`,
        children: [],
      },
      {
        key: `5-4`,
        title: `空间不足时打印模式`,
        children: [],
      },
    ],
  },
  {
    key: `6`,
    title: `使用数据分组打印`,
    children: [
      {
        key: `6-1`,
        title: `简单分组`,
        children: [],
      },
      {
        key: `6-2`,
        title: `多级分组`,
        children: [],
      },
    ],
  },
  {
    key: `7`,
    title: `使用交叉报表打印`,
    children: [
      {
        key: `7-1`,
        title: `交叉报表`,
        children: [],
      },
    ],
  },
  {
    key: `8`,
    title: `使用多页模版打印`,
    children: [
      {
        key: `8-1`,
        title: `多页模版`,
        children: [],
      },
    ],
  },
  {
    key: `9`,
    title: `医嘱打印`,
    children: [
      {
        key: `9-1`,
        title: `续打实现`,
        children: [],
      },
      {
        key: `9-2`,
        title: `补打实现`,
        children: [],
      },
      {
        key: `9-3`,
        title: `回调数据`,
        children: [],
      },
      {
        key: `9-4`,
        title: `套打实现`,
        children: [],
      },
    ],
  },
];

const index = () => {
  const [selectedKeys, setSelectedKeys] = useState(['1']);

  const onSelect = (selectedKeys: any, info: any) => {
    if (selectedKeys.length !== 0) {
      setSelectedKeys(selectedKeys);
    } else {
      setSelectedKeys(info.node.key);
    }
  };

  return (
    <div className={styles.indexContent}>
      <div className={styles.componentContent1}>
        <div className={styles.content}>
          <div className={styles.leftNav}>
            <Tree
              selectedKeys={selectedKeys}
              onSelect={onSelect}
              blockNode
              treeData={treeData}
            />
          </div>
          <div className={styles.mainContent}>
            {selectedKeys[0] == '0' ? (
              <div></div>
            ) : selectedKeys[0] == '1-0' ? (
              <div>
                <h1>线条</h1>
              </div>
            ) : selectedKeys[0] == '2-0' ? (
              <div></div>
            ) : selectedKeys[0] == '2-1' ? (
              <div></div>
            ) : selectedKeys[0] == '2-2' ? (
              <div></div>
            ) : selectedKeys[0] == '2-3' ? (
              <div></div>
            ) : selectedKeys[0] == '2-4' ? (
              <div></div>
            ) : selectedKeys[0] == '2-5' ? (
              <div></div>
            ) : selectedKeys[0] == '2-6' ? (
              <div></div>
            ) : selectedKeys[0] == '3' ? (
              <div></div>
            ) : selectedKeys[0] == '4' ? (
              <div></div>
            ) : selectedKeys[0] == '5' ? (
              <div></div>
            ) : selectedKeys[0] == '6' ? (
              <div></div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
