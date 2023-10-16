import { Image, Tree } from 'antd';
import styles from './index.less';
import { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';

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
  const [selectedKeys, setSelectedKeys] = useState(['1-0']);

  const onSelect = (selectedKeys: any, info: any) => {
    if (selectedKeys.length !== 0) {
      setSelectedKeys(selectedKeys);
    } else {
      setSelectedKeys(info.node.key);
    }
  };

  const onChange = () => {};

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
                  <p>3. 此案例使用了列板功能，列板具体使用请参见案例: </p>
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
              <div></div>
            ) : selectedKeys[0] == '1-2' ? (
              <div>
                <h1>复选框</h1>
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
                  3. 此案例使用了每页打印功能，每页打印具体使用请参见案例:{' '}
                  <a href="">每页打印</a>
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
                  添加好数据集之后，为横表添加行板，为行板绑定list格式的数据集，将使得渲染时，按照业务数据行进行横向渲染，为列表添加列板，为列板绑定list格式的数据集，将使得渲染时，按照业务数据进行纵向渲染；
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
                  ： 首页绑定了a0
                  数据集,a0数据集为列表类型的数据，a0数据集在循环时，后续模版页需跟随此页打印，即如首页当前循环到药品A，
                  则后续多页模版也需按照当前药品A进行指定模版渲染（渲染内容为药品A的信息），后续页面渲染完成后，再开始药品B的渲染...如此循环往复。
                </p>
                <p>
                  此种情况需设置跟随打印的行板名称，如案例模版中跟随打印的模版名称即为a0,对应到模版文件即为如下属性：
                </p>
                <Image
                  width={800}
                  height={500}
                  src={require('../image/多页模板3.png')}
                ></Image>
                <p></p>
                <Image
                  width={800}
                  height={500}
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
                  打印预览时为此效果，真正打印时仅补充打印蓝色遮罩框内的内容+续打红色遮罩框后面的部分，续打遮罩框内的内容将被抹去，但补打遮罩框内的内容将打印。
                </p>
                <h1>补打模版制作：</h1>
                <p>1. 新建模版正常设计打印模版。</p>
                <p>2. 补打的情况可能分以下几种情况:</p>
                <p>-- 补打文本</p>
                <p>-- 补打删除线(作废医嘱等情况)</p>
                <p>-- 补打文本+删除线</p>
                <p>
                  {' '}
                  与续打不同，
                  补打将借助打印设计器事件代码脚本动态控制。需在对应控件的init事件中，控制当前控件的delLineStyle属性+当前控件的printStyle.fillPrinted属性共同实现补打文本，补打删除线，补打文本+删除线三种补丁情况。
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
                  套打，即使用已经设计好页面格式的打印纸张进行打印，如已经印制好表格的纸张，插入打印机进行内容的打印。此种打印预览时可以看到套打背景，但实际打印时，套打背景将被抹去。
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
                  某些业务场景下，打印控件渲染的信息需要返回给业务，如当前医嘱项数据打印在了第几页，第几行，渲染了几行，每行数据分别是什么，后端用以记录或者标记打印历史信息以备案查询或者用于其它。
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
