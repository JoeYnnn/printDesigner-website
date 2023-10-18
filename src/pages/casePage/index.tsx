import { Image, Tree } from 'antd';
import styles from './index.less';
import { useEffect, useRef, useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useSearchParams } from 'umi';

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
        key: `2-1`,
        title: `动态设置边框`,
        children: [],
      },
      {
        key: `2-2`,
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
        key: `3-2`,
        title: `横向表格(横表&行板)`,
        children: [],
      },
      {
        key: `3-3`,
        title: `纵向表格(列表&列板)`,
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
        title: `自动大小、最大行数、最大宽度`,
        children: [],
      },
      {
        key: `4-2`,
        title: `换行文本、页缝换行`,
        children: [],
      },
    ],
  },
  {
    key: `5`,
    title: `使用循环打印样式`,
    children: [
      {
        key: `5-2`,
        title: `每页打印`,
        children: [],
      },
      {
        key: `5-3`,
        title: `循环方向、最大水平、垂直打印设置`,
        children: [],
      },
      {
        key: `5-4`,
        title: `使用补齐空行`,
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
    children: [],
  },
  {
    key: `8`,
    title: `使用多页模版打印`,
    children: [],
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
        title: `套打实现`,
        children: [],
      },
      {
        key: `9-4`,
        title: `回调数据`,
        children: [],
      },
    ],
  },
];

const index = () => {
  const [selectedKeys, setSelectedKeys] = useState(['6-2']);
  const indexRef = useRef<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [treeExpandKeys, setTreeExpandKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  useEffect(() => {
    let key: any = searchParams.get('key');

    if (searchParams.get('key')) {
      key = searchParams.get('key');
    } else {
      key = '1-0';
    }
    setSelectedKeys([key]);

    let newExpandedKeys: any = [getParentKey(key, treeData), key];
    newExpandedKeys = [...new Set(newExpandedKeys)];
    setTreeExpandKeys(newExpandedKeys);
    setAutoExpandParent(true);
  }, [searchParams]);

  const getParentKey = (key: any, tree: any) => {
    let parentKey: any = [];
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.children) {
        if (node.children.some((item: any) => item.key === key)) {
          parentKey.push(node.key);
        } else if (node.children?.length) {
          const childKey = getParentKey(key, node.children);
          parentKey = childKey.length ? [node.key, ...childKey] : parentKey;
        }
      }
    }
    return parentKey!;
  };

  const onSelect = (selectedKeys: any, info: any) => {
    if (selectedKeys.length !== 0) {
      setTimeout(() => {
        indexRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });
      });
      setSearchParams({ key: selectedKeys[0] });
      setSelectedKeys(selectedKeys);
    } else {
      setSearchParams({ key: info.node.key });
      setSelectedKeys([info.node.key]);
    }
    setAutoExpandParent(true);
  };

  const onExpend = (selectedKeys: any) => {
    setAutoExpandParent(false);
    setTreeExpandKeys(selectedKeys);
  };

  const historyToCase = (key: any) => {
    setSelectedKeys([key]);
    setTimeout(() => {
      indexRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });
    });

    let newExpandedKeys: any = [getParentKey(key, treeData), key];
    newExpandedKeys = [...new Set(newExpandedKeys)];
    setTreeExpandKeys(newExpandedKeys);
    setAutoExpandParent(true);

    setSearchParams({ key });
  };

  return (
    <div className={styles.indexContent}>
      <div className={styles.componentContent1}>
        <div className={styles.content}>
          <div className={styles.leftNav}>
            <Tree
              autoExpandParent={autoExpandParent}
              expandedKeys={treeExpandKeys}
              onExpand={onExpend}
              selectedKeys={selectedKeys}
              onSelect={onSelect}
              blockNode
              treeData={treeData}
            />
          </div>
          <div className={styles.mainContent} ref={indexRef}>
            {selectedKeys[0] == '0' ? (
              <div></div>
            ) : selectedKeys[0] == '1-0' ? (
              <div>
                <h1>线条</h1>
                <h2>线条模版运行效果：</h2>
                <p>1.案例效果</p>
                <div>
                  <Image
                    width={800}
                    height={1800}
                    src={require('../image/图片案例1.png')}
                  ></Image>
                  <p>
                    本模版"分数/日期"一栏展示了线条实际使用效果。线条空间一般用于需要斜线的此类场景。
                  </p>
                  <h1>线条模版制作：</h1>
                  <p>
                    1.
                    新建模版后，导航栏拖动线条到画布，或者使用表格的话，选中单元格右键设置单元格类型为线条。
                  </p>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/图片案例2.png')}
                  ></Image>
                  <p>2. 设置线条属性</p>
                  <p>
                    分割文本部分在文本中使用
                    {'<spt />'}
                    内置标识
                  </p>
                  <p>在线性，方向，分区等属性进行相应设置。</p>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/图片案例3.png')}
                  ></Image>
                  <p>
                    本案例中，文本定义使用了一个{'<spt/>'}标识将
                    分数，日期进行了分隔， 使用左斜线 ，制作了左斜线分隔了
                    分数/日期。
                  </p>
                  <p></p>
                  <p>
                    3. 此案例使用了列板功能，列板具体使用请参见案例:{' '}
                    <a onClick={() => historyToCase('3-3')}>
                      简单表格(列表&列板)
                    </a>
                  </p>
                  <Image
                    width={800}
                    height={400}
                    src={require('../image/图片案例4.png')}
                  ></Image>
                  <p>
                    本页面示例模版下载：
                    <a href="https://winwiki.winning.com.cn/download/attachments/82769175/%E7%BA%A6%E7%BF%B0%E9%9C%8D%E6%99%AE%E9%87%91%E6%96%AF%E8%B7%8C%E5%80%92%E9%A3%8E%E9%99%A9%E8%AF%84%E4%BC%B0%E9%87%8F%E8%A1%A8.xml?version=1&modificationDate=1697184437816&api=v2">
                      下载
                    </a>
                  </p>
                  <p>
                    模版对应的预置数据下载：
                    <a href="https://winwiki.winning.com.cn/download/attachments/82769175/%E7%BA%A6%E7%BF%B0%E9%9C%8D%E6%99%AE%E9%87%91%E6%96%AF%E8%B7%8C%E5%80%92%E9%A3%8E%E9%99%A9%E8%AF%84%E4%BC%B0%E9%87%8F%E8%A1%A8.json?version=1&modificationDate=1697184515505&api=v2">
                      下载
                    </a>
                  </p>
                </div>
              </div>
            ) : selectedKeys[0] == '1-1' ? (
              <div>
                <h1>文本框</h1>
                <h2>文本框模版运行效果：</h2>
                <p>1.案例效果</p>
                <div>
                  <Image
                    width={800}
                    height={600}
                    src={require('../image/文本案例1.png')}
                  ></Image>
                  <p>
                    本案例此处使用了文本折行展示，故宽度到达边界时，进行了折行渲染。{' '}
                  </p>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/文本案例2.png')}
                  ></Image>
                  <p>
                    当"文本折行"设置为"否"，且"文本超出"设置为"省略号"时，为如下展示效果。{' '}
                  </p>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/文本案例3.png')}
                  ></Image>
                  <p></p>
                  <Image
                    width={800}
                    height={450}
                    src={require('../image/文本案例4.png')}
                  ></Image>

                  <h1>文本控件模版制作：</h1>
                  <p>
                    1.
                    新建模版后，在使用"标签"控件的场景，在右侧属性区进行"文本"部分属性区属性的设置。
                  </p>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/文本案例5.png')}
                  ></Image>

                  <p>
                    2. 此模版使用了行板功能，行板功能请详细参考
                    简单表格(横表&行板)
                  </p>

                  <p>
                    本页面示例模版下载：
                    <a href="https://winwiki.winning.com.cn/download/attachments/82769177/%E9%95%BF%E6%9C%9F%E5%8C%BB%E5%98%B1%E5%8D%95%28%E6%97%A7%29-0918%20%284%29.xml?version=1&modificationDate=1697445787613&api=v2">
                      下载
                    </a>
                  </p>
                  <p>
                    模版对应的预置数据下载：
                    <a href="https://winwiki.winning.com.cn/download/attachments/82769177/%E6%96%87%E6%9C%AC%E6%8E%A7%E4%BB%B6%E4%B8%9A%E5%8A%A1%E6%95%B0%E6%8D%AE.json?version=1&modificationDate=1697445799729&api=v2">
                      下载
                    </a>
                  </p>
                </div>
              </div>
            ) : selectedKeys[0] == '1-2' ? (
              <div>
                <h1>复选框</h1>
                <h2>复选框模版运行效果：</h2>
                <p>1.案例效果</p>
                <Image
                  width={800}
                  height={1800}
                  src={require('../image/复选框案例1.png')}
                ></Image>
                <p>
                  本模版"特殊治疗效果"一栏展示了按照实际业务数据动态渲染的复选框效果。
                </p>
                <p></p>
                <h1>复选框模版制作：</h1>
                <p>
                  1.
                  新建模版后，导航栏拖动复选框到画布，或者使用表格的话，选中单元格右键设置单元格类型为复选框。
                </p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/复选框案例2.png')}
                ></Image>
                <p>2. 设置复选框属性</p>
                <p>
                  自动尺寸选择"是"，则复选框对应的文本长度将按照文本内容自动拉伸。
                </p>
                <p>选择填充选择"勾选"，则复选框的选项选中时使用"√"效果。</p>
                <p>子项连接选中" "时，复选框选项之间用空格隔开。</p>
                <p>复选框宽，复选框高定义了复选框格子的宽高。</p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/复选框案例3.png')}
                ></Image>
                <p>
                  本案例中，文本变量定义了所有复选框列表选项，
                  为业务数据动态填充；变量定义了对应复选框列表选项对应的勾选值，也为业务数据动态填充。
                </p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/复选框案例4.png')}
                ></Image>
                <p>
                  3. 此案例使用了每页打印功能，每页打印具体使用请参见案例:
                  <a onClick={() => historyToCase('5-2')}>每页打印</a>
                </p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/复选框案例5.png')}
                ></Image>
                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769179/%E5%9F%BA%E6%9C%AC%E5%8C%BB%E7%96%97%E4%BF%9D%E9%99%A9%E5%8F%82%E4%BF%9D%E4%BA%BA%E5%91%98%E7%89%B9%E6%B2%BB%E7%89%B9%E8%8D%AF%E5%A4%87%E6%A1%88%E8%A1%A8.xml?version=1&modificationDate=1697183298766&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769179/%E5%9F%BA%E6%9C%AC%E5%8C%BB%E7%96%97%E4%BF%9D%E9%99%A9%E5%8F%82%E4%BF%9D%E4%BA%BA%E5%91%98%E7%89%B9%E6%B2%BB%E7%89%B9%E8%8D%AF%E5%A4%87%E6%A1%88%E8%A1%A8%E4%B8%9A%E5%8A%A1%E6%95%B0%E6%8D%AE.json?version=1&modificationDate=1697183353705&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '1-3' ? (
              <div>
                <h1>图片</h1>
                <h2>图片模版运行效果：</h2>
                <p>1.案例效果</p>
                <Image
                  width={800}
                  height={300}
                  src={require('../image/图片控件案例1.png')}
                ></Image>
                <p>
                  本模版"医生签字，护士签字"四栏栏展示了图盘实际使用效果。起始处和停止处医生签字栏使用了图片控件，但因无此图片(业务数据给出的
                </p>
                url404或者其余情况加载不到，使用图片控件配置的文本变量展示)；护士签字栏使用了图片控件，业务数据给出的url图片能正常加载，
                <p>
                  故此栏展示了图片。下图展示了签名栏图片控件设置的方法，当图片数据变量加载成功时展示对应图片，加载失败时使用替换文本展示。
                </p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/图片控件案例2.png')}
                ></Image>
                <h1>图片模版制作：</h1>
                <p>
                  1.
                  新建模版后，图片控件到画布，或者使用表格的话，选中单元格右键设置单元格类型为图片。{' '}
                </p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/图片控件案例3.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/图片控件案例4.png')}
                ></Image>
                <p>2. 设置图片属性，</p>
                <p>
                  选中控件，在右侧属性区，设置图片类型为数据变量时，"基础属性"部分的变量属性为加载图片时使用的url变量。如加载的url变量加载图片
                </p>
                <p>加载不到时，则使用"替换文本"中的变量定义展示相应文本。</p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/图片控件案例5.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/图片控件案例6.png')}
                ></Image>
                <p>
                  当图片"类型"选择"本地文件"时，通过"路径"选中本地图片，此操作会将本地图片转为base64编码的图片格式渲染到画布，当保存模版时，
                </p>
                <p>
                  图片内容以base64编码的格式存储于打印模版当中。还可以调整图片宽度，高度，旋转角度，缩放方式等，正常这些属性可以不调整。
                </p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/图片控件案例7.png')}
                ></Image>
                <p>
                  3. 此案例使用了医嘱打印补打功能，列板具体使用请参见案例:
                  <a onClick={() => historyToCase('9-2')}>补打实现</a>
                </p>
                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769182/%E9%95%BF%E6%9C%9F%E5%8C%BB%E5%98%B1%E5%8D%95%28%E6%97%A7%29-0918.xml?version=1&modificationDate=1697433070321&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769182/%E9%95%BF%E6%9C%9F%E5%8C%BB%E5%98%B1%E5%8D%95%E4%B8%9A%E5%8A%A1%E6%95%B0%E6%8D%AE%20%282%29.json?version=1&modificationDate=1697436593836&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '1-4' ? (
              <div>
                <h1>面板</h1>
                <h2>面板模版运行效果：</h2>
                <p>1.案例效果</p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/面板案例1.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/面板案例2.png')}
                ></Image>

                <h1>面板模版制作：</h1>
                <p>
                  1.
                  新建模版后，面板控件到画布，或者使用表格的话，选中单元格右键设置单元格类型为面板。{' '}
                </p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/面板案例3.png')}
                ></Image>
                <p>2. 设置面板属性，</p>
                <p>
                  选中控件，在右侧属性区，可以为面板控件绑定数据节点，不绑定数据节点的话，面板默认使用父级控件的数据节点。
                </p>
                <p>如下图模版使用的数据节点为detailDIsplay数据节点。</p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/面板案例4.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/面板案例5.png')}
                ></Image>
                <p>使用面板控件，可以在其内部放置别的子组件。</p>
                <p>
                  3. 此案例使用了每页打印功能，列板具体使用请参见案例:{' '}
                  <a onClick={() => historyToCase('5-2')}>每页打印</a>
                </p>

                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769184/%E9%80%9A%E7%94%A8%E6%89%A7%E8%A1%8C%E5%8D%95%20%281%29.xml?version=1&modificationDate=1697438338236&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769184/%E9%80%9A%E7%94%A8%E6%89%A7%E8%A1%8C%E5%8D%95%E4%B8%9A%E5%8A%A1%E6%95%B0%E6%8D%AE.json?version=1&modificationDate=1697438385104&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '2-1' ? (
              <div>
                <h1>动态设置边框</h1>
                <h2>脚本动态设置边框模版运行效果：</h2>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={1500}
                  src={require('../image/动态边框案例1.png')}
                ></Image>
                <p>此模版在补齐空行时将表格边框动态进行了设置。</p>

                <h1>脚本设置边框模版制作：</h1>
                <p>
                  1.
                  选中行板，在行板初始化事件中，定义事件脚本，循环遍历行板子级，将子级的borderBottom属性设置为0.5pt
                  solid 黑色。{' '}
                </p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/动态边框案例2.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/动态边框案例3.png')}
                ></Image>

                <p>
                  2. 此模版使用了补齐空行功能，补齐空行请参考:{' '}
                  <a onClick={() => historyToCase('5-4')}>使用补齐空行</a>
                </p>

                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82770624/%E7%97%85%E6%88%BF%E6%B1%87%E6%80%BB%E9%A2%86%E8%8D%AF%E5%8D%95-%E6%8C%89%E8%AF%B7%E9%A2%86%E7%A7%91%E5%AE%A4-%E8%8D%AF%E5%93%81ID%E4%BA%8C%E7%BA%A7%E5%88%86%E7%BB%84%20%281%29.xml?version=1&modificationDate=1697440951695&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82770624/%E7%97%85%E6%88%BF%E6%B1%87%E6%80%BB%E9%A2%86%E8%8D%AF%E5%8D%95.json?version=1&modificationDate=1697440956244&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '2-2' ? (
              <div>
                <h1>表格合计等</h1>
                <h2>脚本合计模版运行效果：</h2>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={1200}
                  src={require('../image/表格合计案例1.png')}
                ></Image>
                <p>本模版"合计金额"一栏使用脚本动态进行了合计计算。</p>

                <h1>合计模版制作：</h1>
                <p>
                  1.
                  新建正常模版，在需要合计的控件属性区"变量"部分填写脚本表达式。
                </p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/表格合计案例2.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/表格合计案例3.png')}
                ></Image>
                <p>
                  2.
                  亦可使用事件，在事件中定义脚本计算，为中间变量赋值，在变量处使用此中间变量:
                </p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/表格合计案例4.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/表格合计案例5.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/表格合计案例6.png')}
                ></Image>

                <p>
                  3. 此案例使用了补齐空行功能，补齐空行功能具体使用请参见案例:{' '}
                  <a onClick={() => historyToCase('5-4')}>补齐空行</a>
                </p>

                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769173/%E7%97%85%E6%88%BF%E6%B1%87%E6%80%BB%E9%A2%86%E8%8D%AF%E5%8D%95-%E6%8C%89%E8%AF%B7%E9%A2%86%E7%A7%91%E5%AE%A4-%E8%8D%AF%E5%93%81ID%E4%BA%8C%E7%BA%A7%E5%88%86%E7%BB%84.xml?version=2&modificationDate=1697439392546&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769173/%E7%97%85%E6%88%BF%E6%B1%87%E6%80%BB%E9%A2%86%E8%8D%AF%E5%8D%95.json?version=1&modificationDate=1697439414147&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '3-2' ? (
              <div>
                <h1>简单表格(横表&行板)</h1>
                <h2>行板模版运行效果：</h2>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={1500}
                  src={require('../image/简单表格行板案例1.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={1400}
                  src={require('../image/简单表格行板案例2.png')}
                ></Image>
                <p>
                  本模版左侧表头固定不变，依据业务数据动态渲染右侧部分，当充满当前页时，触发换页逻辑，换页时，左侧表头仍需打印。
                </p>

                <h1>行板模版制作：</h1>
                <p>1. 从导航栏拖拽表格控件到画布： </p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/简单表格行板案例3.png')}
                ></Image>
                <p>
                  2.
                  选择对应单元格为表格添加行板。因表格会循环渲染业务数据，故行板需与业务数据格式对应。可为表格添加多个层级的板，
                </p>
                <p>
                  板设置可直接从非list格式的数据集开始设置。此模版起始数据集为list格式，故行板绑定的数据集从a0开始。
                </p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/简单表格行板案例4.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/简单表格行板案例5.png')}
                ></Image>
                <p>
                  3.
                  此案例使用了分组功能，每页打印功能，补齐空行功能，面板控件，具体使用请参见案例:
                  <a onClick={() => historyToCase('6-1')}>使用简单分组</a>，
                  <a onClick={() => historyToCase('5-2')}>每页打印</a>，
                  <a onClick={() => historyToCase('5-4')}>使用补齐空行</a>，
                  <a onClick={() => historyToCase('1-4')}>使用面板</a>，
                </p>

                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769163/%E8%B7%A8%E9%A1%B5%E3%80%81%E9%A6%96%E8%A1%8C%E6%98%BE%E7%A4%BA%28%E6%AD%A3%E5%B8%B8%29%20%281%29.xml?version=1&modificationDate=1697442556973&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769163/%E7%94%A8%E8%8D%AF%E6%8C%87%E5%AF%BC%E5%8D%95.json?version=1&modificationDate=1697442602377&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '3-3' ? (
              <div>
                <h1>简单表格(列表&列板)</h1>
                <h2>列板模版运行效果：</h2>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={1600}
                  src={require('../image/简单表格列板案例1.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={1500}
                  src={require('../image/简单表格列板案例2.png')}
                ></Image>
                <p>
                  本模版左侧表头固定不变，依据业务数据动态渲染右侧部分，当充满当前页时，触发换页逻辑，换页时，左侧表头仍需打印。{' '}
                </p>

                <h1>列板模版制作：</h1>
                <p>
                  1. 新建表格后，将表格设置为
                  "横向延展"，选中表格对应列，右键弹出菜单中选择
                  "选中单元格添加板"。{' '}
                </p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/简单表格列板案例3.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={600}
                  src={require('../image/简单表格列板案例4.png')}
                ></Image>
                <p>2. 为列板绑定业务数据集。</p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/简单表格列板案例5.png')}
                ></Image>
                <p>
                  3. 此案例使用了每页打印功能，列板具体使用请参见案例:
                  <a onClick={() => historyToCase('5-2')}>每页打印</a>
                </p>

                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769175/%E7%BA%A6%E7%BF%B0%E9%9C%8D%E6%99%AE%E9%87%91%E6%96%AF%E8%B7%8C%E5%80%92%E9%A3%8E%E9%99%A9%E8%AF%84%E4%BC%B0%E9%87%8F%E8%A1%A8.xml?version=1&modificationDate=1697184437816&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769175/%E7%BA%A6%E7%BF%B0%E9%9C%8D%E6%99%AE%E9%87%91%E6%96%AF%E8%B7%8C%E5%80%92%E9%A3%8E%E9%99%A9%E8%AF%84%E4%BC%B0%E9%87%8F%E8%A1%A8.json?version=1&modificationDate=1697184515505&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '4-1' ? (
              <div>
                <h1>自动大小、最大行数、最大宽度</h1>
                <h2>自动大小模版运行效果：</h2>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={1400}
                  src={require('../image/自动大小案例1.png')}
                ></Image>
                <p>
                  在本模版"长期医嘱"列，设置了医嘱项"空间不足打到父容器"，一格放不下将触发"换行"操作
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/自动大小案例2.png')}
                ></Image>
                <p>
                  设置了最大行数，则限制最大行数为具体数值；设置了最大宽度，则限制最大宽度为具体数值。
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/自动大小案例3.png')}
                ></Image>
                <p>不设置最大行数时，效果如下:</p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/自动大小案例4.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/自动大小案例5.png')}
                ></Image>
                <h1>自动大小模版制作：</h1>
                <p>
                  1. 新建模版后，为模版表格控件中的
                  "标签"控件(当此空间的文本内容预期较多时)，设置自动大小，最大行数，最大宽度属性。
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/自动大小案例6.png')}
                ></Image>
                <p>
                  2. 此模版使用了行板功能，行板功能请详细参考:
                  简单表格(横表&行板)
                  ，使用了换行文本功能，换行文本详细参考:换行文本，页缝换行
                </p>

                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769159/%E9%95%BF%E6%9C%9F%E5%8C%BB%E5%98%B1%E5%8D%95%28%E6%97%A7%29-0918%20%282%29.xml?version=1&modificationDate=1697444832737&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769159/%E8%87%AA%E5%8A%A8%E5%A4%A7%E5%B0%8F.json?version=1&modificationDate=1697444838360&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '4-2' ? (
              <div>
                <h1>换行文本、页缝换行</h1>
                <h2>换行文本模版运行效果：</h2>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={600}
                  src={require('../image/换行案例1.png')}
                ></Image>
                <p>
                  在"日期"单元格一栏使用了换行文本设置，则多行文本的医嘱项出现时，其余同行单元格按照换行文本设置(当位于页缝处时，即为页缝换行)进行展示。
                </p>
                此案例设置了换行文本为"所有行展示"。 <p></p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/换行案例2.png')}
                ></Image>
                <p>未设置"所有行展示"时，效果如下: </p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/换行案例3.png')}
                ></Image>
                <h1>换行文本模版制作：</h1>
                <p>
                  1. 新建模版后，为模版表格控件中的
                  "标签"控件，设置换行文本属性，当控件对应行其余单元格存在换行的文本时，本单元格换行时按照设置进行展示。
                </p>
                <p>页缝换行为页缝处换行样式。</p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/换行案例4.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={450}
                  src={require('../image/换行案例5.png')}
                ></Image>
                <p>
                  2. 此模版使用了行板功能，行板功能请详细参考
                  简单表格(横表&行板)
                </p>
                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769161/%E9%95%BF%E6%9C%9F%E5%8C%BB%E5%98%B1%E5%8D%95%28%E6%97%A7%29-0918%20%281%29.xml?version=1&modificationDate=1697443897404&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769161/%E6%8D%A2%E8%A1%8C%E6%96%87%E6%9C%AC.json?version=1&modificationDate=1697443912768&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '5-2' ? (
              <div>
                <h1>每页打印</h1>
                <h2>每页打印模版运行效果：</h2>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={1400}
                  src={require('../image/每页打印案例1.png')}
                ></Image>
                <p>
                  本模版就诊患者信息这一栏即使用了行板的每页打印，使得在多页渲染时，患者信息可以每页渲染；
                </p>
                <p>另外，当控件放置到页眉和页脚时，会默认每页打印：</p>
                <Image
                  width={800}
                  height={1400}
                  src={require('../image/每页打印案例2.png')}
                ></Image>
                <h1>每页打印模版制作：</h1>
                <p>1. 新建模版后，页眉和页脚部分默认即为每页打印。 </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/每页打印案例3.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/每页打印案例4.png')}
                ></Image>
                <p>
                  2.
                  某些情况需要在业务数据循环时使用每页打印，则需要在模版中循环的业务数据绑定的板对应的板上进行循环设置，设置每页打印，
                </p>
                即可实现每页打印的效果。此处打印模式默认是"只打一次"。
                <p></p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/每页打印案例5.png')}
                ></Image>
                <p>3. 此模版使用了分组功能，分组功能请详细参考 使用简单分组</p>
                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769148/%E7%94%A8%E8%8D%AF%E6%8C%87%E5%AF%BC%E5%8D%95.xml?version=1&modificationDate=1697177635561&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769153/%E7%94%A8%E8%8D%AF%E6%8C%87%E5%AF%BC%E5%8D%95%E6%AF%8F%E9%A1%B5%E6%89%93%E5%8D%B0.json?version=2&modificationDate=1697181095543&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '5-3' ? (
              <div>
                <h1>循环方向、最大水平、垂直打印设置</h1>
                <h2>一式多份模版运行效果：</h2>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={1400}
                  src={require('../image/循环案例1.png')}
                ></Image>
                <p>
                  一式多份:即一页打印多个表格的情况，此案例设置了一页纵向最多打一次，横向(水平)最多打2次，故出现此效果。
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/循环案例2.png')}
                ></Image>

                <h1>一式多份打印模版制作：</h1>
                <p>
                  1. 新建模版后，在表格的右侧属性:"循环"部分:
                  进行循环方向，最大水平打印次数，最大垂直打印次数的设置。
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/循环案例3.png')}
                ></Image>
                <p>
                  2.
                  当内层循环需要控制某次表格最大打印次数时，需在业务循环板上进行最大垂直打印次数的设置。
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/循环案例4.png')}
                ></Image>
                <p>
                  3. 此模版使用了每页打印功能，每页打印请参考:
                  <a onClick={() => historyToCase('5-2')}>每页打印</a>
                </p>

                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769155/%E8%BE%93%E6%B6%B2%E5%8D%A1_2%28%E6%96%B0%29.xml?version=1&modificationDate=1697437555522&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769155/%E8%BE%93%E6%B6%B2%E5%8D%A1%E4%B8%80%E5%BC%8F%E5%A4%9A%E4%BB%BD.json?version=1&modificationDate=1697437617836&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '5-4' ? (
              <div>
                <h1>使用补齐空行</h1>
                <h2>补齐空行模版运行效果：</h2>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={1400}
                  src={require('../image/补齐案例1.png')}
                ></Image>
                <p>
                  某些情况下，页面为填充满时，需要填充空格或者空行到页尾，此时需要用到补齐空行。
                </p>

                <h1>补齐空行模版制作：</h1>
                <p>
                  1.
                  新建模版后，在表格模版选中最后位置板，将补齐空行属性设置为"是"。
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/补齐案例2.png')}
                ></Image>
                <p>
                  2.
                  当行板内表格需要显示边框时，可以使用自定义脚本或者直接将补齐空行处的空行设置展示边框线。本例中使用了脚本动态设置边框线。
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/补齐案例3.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/补齐案例4.png')}
                ></Image>
                <p>
                  3. 此模版使用了脚本设置边框功能，脚本设置边框请参考:
                  <a onClick={() => historyToCase('2-1')}>动态设置边框</a>
                </p>

                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82770624/%E7%97%85%E6%88%BF%E6%B1%87%E6%80%BB%E9%A2%86%E8%8D%AF%E5%8D%95-%E6%8C%89%E8%AF%B7%E9%A2%86%E7%A7%91%E5%AE%A4-%E8%8D%AF%E5%93%81ID%E4%BA%8C%E7%BA%A7%E5%88%86%E7%BB%84%20%281%29.xml?version=1&modificationDate=1697440951695&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82770624/%E7%97%85%E6%88%BF%E6%B1%87%E6%80%BB%E9%A2%86%E8%8D%AF%E5%8D%95.json?version=1&modificationDate=1697440956244&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '6-1' ? (
              <div>
                <h1>简单分组</h1>
                <h2>简单分组报表模版运行效果：</h2>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={1400}
                  src={require('../image/简单分组案例1.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={1400}
                  src={require('../image/简单分组案例2.png')}
                ></Image>
                <p>
                  本模版使用就诊标识进行分组，共渲染两页，第一页分组后双鞭呼延灼一共有三条药品指导记录，第二页分组后双鞭呼延灼2一共有一条药品指导记录
                </p>
                <p>
                  业务数据一共有4条药品指导数据， 就诊标识为310486398463459328
                  的双鞭呼延灼一共有三条药品记录；
                </p>
                <p>
                  就诊标识为310486398463459329的双鞭呼延灼一共有一条药品记录，按照床号排序后，得到上述渲染效果。
                </p>

                <h1>简单分组模版制作：</h1>
                <p>
                  1.
                  新建模版后，维护数据集，依据数据集或者后端业务接口数据格式确定如何分组。找到数据集需要分组的节点，点击右键，选择分组功能。
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/简单分组案例3.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/简单分组案例4.png')}
                ></Image>
                <p>
                  添加一条分组，如需在此节点按多个字段分组，则可添加多条分组记录。点击确定后，简单分组完成
                </p>
                <p>
                  2.
                  在需要对分组结果的明细进行遍历时，需在分组节点下创建BEAN数据集，以模拟分组明细(item数据集为系统默认，在分组建立后，
                </p>
                <p>
                  创建item数据集才可通过)。此模版需要对分组之后的结果进行遍历，故新建了item数据集。
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/简单分组案例5.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/简单分组案例6.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/简单分组案例7.png')}
                ></Image>
                <p>
                  3. 此模版使用了每页打印打印样式，每页打印功能请详细参考
                  每页打印
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/简单分组案例8.png')}
                ></Image>
                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769148/%E7%94%A8%E8%8D%AF%E6%8C%87%E5%AF%BC%E5%8D%95.xml?version=1&modificationDate=1697177635561&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769148/%E7%AE%80%E5%8D%95%E5%88%86%E7%BB%84%E4%B8%9A%E5%8A%A1%E6%95%B0%E6%8D%AE.json?version=1&modificationDate=1697177682553&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '6-2' ? (
              <div>
                <h1>多级分组</h1>
                <h2>多级分组报表模版运行效果：</h2>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={1400}
                  src={require('../image/多级分组案例1.png')}
                ></Image>
                <p>
                  本模版先使用住院实际发药单据号进行分组，分完组之后，又依据
                  执行计划标识 进行分组。
                </p>
                <p>
                  第1-3页为住院实际发药单据号为ZYFY5710220230830000025的药品数据，{' '}
                </p>
                <p>
                  第4-5页为住院实际发药单据号为ZYFY5710220230830000026的药品数据，{' '}
                </p>
                <p>
                  第1，第4页为汇总页，
                  第2-3页，第5页为明细页。第2页甘露醇注射液的执行计划标识为315629918153109516，第3页左氧氟沙星针的执行计划标识
                </p>
                <p>
                  为315787354474311704，第5页左氧氟沙星针的执行计划标识为315787354474311705
                </p>

                <h1>多级分组模版制作：</h1>
                <p>
                  1.
                  新建模版后，维护数据集，依据数据集或者后端业务接口数据格式确定如何分组。找到数据集需要分组的节点，点击右键，选择分组功能。
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/多级分组案例2.png')}
                ></Image>
                <p>
                  添加一条分组，如需在此节点按多个字段分组，则可添加多条分组记录。
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/多级分组案例3.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/多级分组案例4.png')}
                ></Image>
                <p>点击确定后，第一级分组完成</p>
                <p>
                  2.
                  在需要进行第二级分组时，需在第一级分组节点下创建BEAN数据集，以模拟分组明细，在分组明细的基础上，再进行第一步分组操作。
                </p>
                <p>
                  (item数据集为系统默认，在第一级分组建立后，创建item数据集才可通过)
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/多级分组案例5.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/多级分组案例6.png')}
                ></Image>
                <p>
                  再在新建的item数据集上进行与第一步一致的分组操作，如需遍历第二级分组下的明细，则仍需要在第二级分组下新建item数据集，
                </p>
                <p>
                  用以在画布上绑板。此模版为需要遍历二级分组下明细的情况，故再次新建了item数据集，并在画布处进行了绑定。
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/多级分组案例7.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/多级分组案例8.png')}
                ></Image>
                <p>
                  3.
                  此模版为多页模版与多级分组打印情况的结合，多页模版制作请参考
                  <a onClick={() => historyToCase('8')}>使用多页模版</a>
                </p>
                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769150/%E4%BD%8F%E9%99%A2%E8%8D%AF%E6%88%BF%E8%BE%93%E6%B6%B2%E7%BB%84%E5%90%88%E7%AD%BE.xml?version=1&modificationDate=1697176362696&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769150/%E4%BD%8F%E9%99%A2%E8%8D%AF%E6%88%BF%E8%BE%93%E6%B6%B2%E7%BB%84%E5%90%88%E7%AD%BE%E4%B8%9A%E5%8A%A1%E6%95%B0%E6%8D%AE.json?version=1&modificationDate=1697176419543&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '7' ? (
              <div>
                <h1>交叉报表</h1>
                <p>1.案例效果</p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/交叉报表案例1.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/交叉报表案例2.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/交叉报表案例3.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/交叉报表案例4.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/交叉报表案例5.png')}
                ></Image>
                <p>
                  1.第一张，第二张，第三张为患者页尾处时，整个交叉表的打印效果，从第四张开始进行剩余患者数据的渲染；
                </p>
                <p>
                  当患者数据填不满当前页时，表头列放不下的部分仍然换页显示。
                </p>
                <p>2.左侧固定列如不需要时可移除或者将列宽设置为0</p>

                <h1>交叉表模版制作：</h1>
                <p>1. 新建模版后，从顶部导航栏添加交叉表控件。</p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/交叉报表案例6.png')}
                ></Image>
                <p>2. 交叉表默认横向表范围为1行，默认纵表范围为2列。</p>
                <p> 可通过如下"+"控件，长按拖动以扩大左上表头的范围。</p>
                <p>
                  {' '}
                  可通过选中横表内单元格点击鼠标右键，扩大横表为多行；可通过选中列表内单元格点击鼠标右键，扩大列表为多列。
                </p>
                <p>
                  {' '}
                  可通过选中横表内单元格点击鼠标右键，删除行缩小横表行范围；可通过选中列表内单元格点击鼠标右键，删除列缩小列表范围。
                </p>
                <Image
                  width={400}
                  height={200}
                  src={require('../image/交叉报表案例7.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/交叉报表案例8.png')}
                ></Image>
                <p></p>
                <Image
                  width={400}
                  height={200}
                  src={require('../image/交叉报表案例9.png')}
                ></Image>
                <p></p>
                <Image
                  width={400}
                  height={200}
                  src={require('../image/交叉报表案例10.png')}
                ></Image>
                <p></p>
                <Image
                  width={400}
                  height={200}
                  src={require('../image/交叉报表案例11.png')}
                ></Image>
                <p></p>
                <Image
                  width={400}
                  height={200}
                  src={require('../image/交叉报表案例12.png')}
                ></Image>
                <p>
                  3.
                  添加好数据集之后，为横表添加行板，为行板绑定list格式的数据集，将使得渲染时，按照业务数据行进行横向渲染，
                </p>
                <p>
                  为列表添加列板，为列板绑定list格式的数据集，将使得渲染时，按照业务数据进行纵向渲染；
                </p>
                <div>
                  <Image
                    width={400}
                    height={200}
                    src={require('../image/交叉报表案例13.png')}
                  ></Image>
                  <p></p>
                  <Image
                    width={400}
                    height={200}
                    src={require('../image/交叉报表案例14.png')}
                  ></Image>
                </div>
                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769062/%E6%82%A3%E8%80%85%E4%B8%80%E8%A7%88%E8%A1%A8.xml?version=1&modificationDate=1697087853453&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769062/%E6%82%A3%E8%80%85%E4%B8%80%E8%A7%88%E8%A1%A8%E4%B8%9A%E5%8A%A1%E6%95%B0%E6%8D%AE.json?version=1&modificationDate=1697088233197&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '8' ? (
              <div>
                <h1>多页模版</h1>
                <p>1.案例效果</p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/多页模板1.png')}
                ></Image>
                <p>第二页 第三页对应第一页数据信息，第四页开始下一条数据循环</p>
                <h1>多页模版制作：</h1>
                <p>1. 新建模版后为模版添加新的页面(跟随打印的页面)</p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/多页模板2.png')}
                ></Image>
                <p>
                  2.
                  设计好页面之后，如后续页面需跟随首页打印的情况，如第一步中示例
                  ： 首页绑定了a0 数据集，a0数据集为列表类型的数据，
                </p>
                <p>
                  a0数据集在循环时，后续模版页需跟随此页打印，即如首页当前循环到药品A，
                  则后续多页模版也需按照当前药品A进行指定模版渲染
                </p>
                <p>
                  （渲染内容为药品A的信息），后续页面渲染完成后，再开始药品B的渲染...如此循环往复。
                </p>
                <p>
                  此种情况需设置跟随打印的行板名称，如案例模版中跟随打印的模版名称即为a0,对应到模版文件即为如下属性：
                </p>
                <Image
                  width={800}
                  height={1800}
                  src={require('../image/多页模板3.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={1000}
                  src={require('../image/多页模板4.png')}
                ></Image>
                <p>
                  3.
                  现阶段设计态未开放此种跟随打印情形的设计，制作此模版请以案例中模版为原型，先下载模版后，再上传到对应环境，修改模版以实现此案例效果。
                </p>
                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769064/%E4%BD%8F%E9%99%A2%E8%8D%AF%E6%88%BF%E8%A5%BF%E6%88%90%E8%8D%AF%E6%B1%87%E6%80%BB%E7%BB%84%E5%90%88%E7%AD%BE%E5%A4%9A%E9%A1%B5%E6%A8%A1%E7%89%88%E8%B7%9F%E9%9A%8F.xml?version=1&modificationDate=1697080877565&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769064/%E4%BD%8F%E9%99%A2%E8%8D%AF%E6%88%BF%E8%A5%BF%E6%88%90%E8%8D%AF%E6%B1%87%E6%80%BB%E7%BB%84%E5%90%88%E7%AD%BE%E5%A4%9A%E9%A1%B5%E6%A8%A1%E7%89%88%E8%B7%9F%E9%9A%8F.json?version=1&modificationDate=1697080960039&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '9-1' ? (
              <div>
                <h1>续打实现</h1>
                <h2>续打定义：</h2>
                <p>
                  续打，即使用同一个打印模版打印过一份数据后，新增业务数据到来时，将原先未打完的纸张插入打印机，从原有打印记录位置处接续打印的过程。
                </p>
                <p>
                  注意:
                  因此种打印渲染效果与实际打印效果不一致，因此需要借助混合框架实现。此种打印必须借助混合框架的能力。
                </p>

                <h1>续打模版运行效果：</h1>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={1200}
                  src={require('../image/续打案例1.png')}
                ></Image>
                <p>
                  打印预览时为此效果，真正打印时仅打印红色遮罩框以下的内容，遮罩框内的内容将被抹去
                </p>

                <h1>续打模版制作：</h1>
                <p>1. 新建模版正常设计打印模版。</p>
                <p>
                  2. 续打效果已内置于打印控件，仅需在业务数据中增加相关定义:
                </p>
                <p>
                  -- 数据根级节点返回printCurPage字段，从第1页开始 可选值为 1 |
                  2| 3...
                </p>
                <p>
                  -- 续打连接处最后一条数据中返回:printEndLine字段， 可选值为
                  true | false
                </p>
                <p>
                  --
                  如为补行续打，则补行数据处需返回printInsert字段，且值需为true，上述1,2步骤仍需正常设置;
                </p>
                <p style={{ paddingLeft: 14 }}>
                  补行所在页前续页面不显示，补行所在页及后续页按续打显示逻辑正常返回
                </p>
                <p>3. 打印时发送到混合框架即可按续打效果进行打印。</p>
                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769068/%E4%B8%B4%E6%97%B6%E5%8C%BB%E5%98%B1.xml?version=1&modificationDate=1697097669820&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769068/%E4%B8%B4%E6%97%B6%E5%8C%BB%E5%98%B1%E7%BB%AD%E6%89%93%E4%B8%9A%E5%8A%A1%E6%95%B0%E6%8D%AE.json?version=1&modificationDate=1697097677398&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '9-2' ? (
              <div>
                <h1>补打实现</h1>
                <h2>补打定义：</h2>
                <p>
                  补打，即使用同一个打印模版打印过一份数据后，有时候前序打印页空白部分填充了数据，打印机插入原先打印纸张后补齐空白的打印过程。
                </p>
                <p>
                  注意:
                  因此种打印渲染效果与实际打印效果不一致，因此需要借助混合框架实现。此种打印必须借助混合框架的能力。
                </p>
                <h1>补打模版运行效果：</h1>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={1200}
                  src={require('../image/补打案例1.png')}
                ></Image>
                <p>
                  打印预览时为此效果，真正打印时仅补充打印蓝色遮罩框内的内容+续打红色遮罩框后面的部分，续打遮罩框内的内容将被抹去，
                </p>
                <p>但补打遮罩框内的内容将打印。</p>
                <h1>补打模版制作：</h1>
                <p>1. 新建模版正常设计打印模版。</p>
                <p>2. 补打的情况可能分以下几种情况:</p>
                <p>-- 补打文本</p>
                <p>-- 补打删除线(作废医嘱等情况)</p>
                <p>-- 补打文本+删除线</p>
                <p>
                  {' '}
                  与续打不同，
                  补打将借助打印设计器事件代码脚本动态控制。需在对应控件的init事件中，控制当前控件的delLineStyle属性+当前控件
                </p>
                <p>
                  的printStyle.fillPrinted属性共同实现补打文本，补打删除线，补打文本+删除线三种补丁情况。
                </p>
                <p>实现补打文本控制脚本写法如下:</p>
                <AceEditor
                  mode="javascript"
                  theme="github"
                  name="UNIQUE_ID_OF_DIV"
                  showPrintMargin={true}
                  showGutter={true}
                  highlightActiveLine={true}
                  setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                  }}
                  style={{ width: 800 }}
                  value={`//delLineStyle控制删除线是否展示;printStyle.fillPrinted控制是否补打；
                  //展示及补打控制均需在对应控件的init事件中依据数据定义脚本
                  // 补打文本
                  if ($ && $['printFilled'] && true === $['printFilled']) {
                      me.delLineStyle = 0;
                      me.printStyle.fillPrinted = 'text';
                    } 
                  // 补打删除线
                  else if ($ && $['printFilledLine'] && true === $['printFilledLine']) {
                      me.delLineStyle = 1;
                      me.printStyle.fillPrinted = 'line';
                    } 
                  // 补打文本+删除线
                  else if ($ && $['printFilledAll'] && true === $['printFilledAll']) {
                      me.delLineStyle = 1;
                      me.printStyle.fillPrinted = 'textLine';
                    } 
                  else {
                      me.delLineStyle = 0;
                      me.printStyle.fillPrinted = '';
                    }`}
                />
                <p></p>
                <p>3. 打印时发送到混合框架即可按补打效果进行打印。</p>
                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769068/%E4%B8%B4%E6%97%B6%E5%8C%BB%E5%98%B1.xml?version=1&modificationDate=1697097669820&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769068/%E4%B8%B4%E6%97%B6%E5%8C%BB%E5%98%B1%E7%BB%AD%E6%89%93%E4%B8%9A%E5%8A%A1%E6%95%B0%E6%8D%AE.json?version=1&modificationDate=1697097677398&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '9-3' ? (
              <div>
                <h1>套打实现</h1>
                <h2>套打定义：</h2>
                <p>
                  套打，即使用已经设计好页面格式的打印纸张进行打印，如已经印制好表格的纸张，插入打印机进行内容的打印。
                </p>
                <p>
                  此种打印预览时可以看到套打背景，但实际打印时，套打背景将被抹去。
                </p>
                <p>
                  注意:
                  因此种打印渲染效果与实际打印效果不一致，因此需要借助混合框架实现。此种打印必须借助混合框架的能力。
                </p>

                <h1>套打模版运行效果：</h1>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={600}
                  src={require('../image/套打案例1.png')}
                ></Image>
                <p>打印预览时为此效果，真正打印时仅打印以下内容:</p>
                <Image
                  width={800}
                  height={600}
                  src={require('../image/套打案例2.png')}
                ></Image>

                <h1>套打模版制作：</h1>
                <p>1. 新建模版正常设计打印模版。</p>
                <p>
                  2. 设计好页面之后，画布底部面包屑中选中
                  "目录页"，为其添加套打需要的背景图片，注意：此背景图片需与套打打印纸张的背景图片相同，以实现套打效果。
                </p>
                <Image
                  width={800}
                  height={600}
                  src={require('../image/套打案例3.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={600}
                  src={require('../image/套打案例4.png')}
                ></Image>
                <p>3. 打印时发送到混合框架即可按套打效果进行打印。</p>
                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769072/%E9%95%BF%E6%9C%9F%E5%8C%BB%E5%98%B1%E5%8D%95-%E6%96%B0.xml?version=1&modificationDate=1697095486042&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769072/%E9%95%BF%E6%9C%9F%E5%8C%BB%E5%98%B1%E5%8D%95%E4%B8%9A%E5%8A%A1%E6%95%B0%E6%8D%AE.json?version=2&modificationDate=1697095500277&api=v2">
                    下载
                  </a>
                </p>
              </div>
            ) : selectedKeys[0] == '9-4' ? (
              <div>
                <h1>回调数据</h1>
                <h2>业务数据元信息回调:</h2>
                <p>
                  某些业务场景下，打印控件渲染的信息需要返回给业务，如当前医嘱项数据打印在了第几页，第几行，渲染了几行，
                </p>
                <p>
                  每行数据分别是什么，后端用以记录或者标记打印历史信息以备案查询或者用于其它。
                </p>

                <h1>业务数据元信息回调模版运行效果：</h1>
                <p>1.案例效果:</p>
                <Image
                  width={800}
                  height={1200}
                  src={require('../image/回调案例1.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={1200}
                  src={require('../image/回调案例2.png')}
                ></Image>
                <p>
                  如此医嘱单，肝素钠 （肝素钠封管注射液） 5ml 500单位/支 5.0ml
                  领药
                  这条医嘱项，如配置了元数据回调返回，则返回的业务数据如上述第二张图片。
                </p>

                <h1>元数据回调模版制作：</h1>
                <p>1. 新建模版正常设计打印模版。</p>
                <p>
                  2.
                  设计好页面之后，需设置整个模版是否回调返回字段渲染元信息，如返回，则需设置
                </p>
                <p>
                  returnBizData为true，同时需要设置returnBizDataCompName为需要返回元信息的字段:
                </p>
                <p>如下图:</p>
                <Image
                  width={800}
                  height={1200}
                  src={require('../image/回调案例3.png')}
                ></Image>
                <p>
                  3.
                  现阶段设计态未开放此种回调返回元信息情形的设计，制作此模版请在page或pagePanel初始化事件中添加如下事件代码:
                </p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/回调案例4.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/回调案例5.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={400}
                  src={require('../image/回调案例6.png')}
                ></Image>
                <p></p>
                <AceEditor
                  mode="javascript"
                  theme="github"
                  name="UNIQUE_ID_OF_DIV1"
                  showPrintMargin={true}
                  showGutter={true}
                  highlightActiveLine={true}
                  setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                  }}
                  style={{ width: 800, height: 300 }}
                  value={`report.Panel_0_initPrint_lineMetaSetting = function() { 
 
                    me.report.returnBizData = true; 
                    
                    me.report.returnBizDataCompName='content';
                    
                   }`}
                />
                <p>
                  本页面示例模版下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769074/%E4%B8%B4%E6%97%B6%E5%8C%BB%E5%98%B1.xml?version=1&modificationDate=1697102512616&api=v2">
                    下载
                  </a>
                </p>
                <p>
                  模版对应的预置数据下载：
                  <a href="https://winwiki.winning.com.cn/download/attachments/82769074/%E4%B8%B4%E6%97%B6%E5%8C%BB%E5%98%B1%E5%9B%9E%E8%B0%83%E8%BF%94%E5%9B%9E%E5%85%83%E6%95%B0%E6%8D%AE%E4%B8%9A%E5%8A%A1%E6%95%B0%E6%8D%AE.json?version=2&modificationDate=1697102543156&api=v2">
                    下载
                  </a>
                </p>
              </div>
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
