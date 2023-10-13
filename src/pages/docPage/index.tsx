import { Tree, Image } from 'antd';
import styles from './index.less';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import TextComp from './textComp';
import LineComp from './lineComp';
import MarkComp from './markComp';
import CheckboxComp from './checkboxComp';
import PicComp from './picComp';
import CodecComp from './codecComp';
import BarCodeComp from './barCodeComp';
import PanelComp from './panelComp';
import TableComp from './tableComp';
import RowComp from './rowComp';
import PublicComp from './publicComp';

const treeData = [
  {
    key: `0`,
    title: `使用入门`,
    children: [],
  },
  {
    key: `1`,
    title: `组件相关`,
    children: [
      {
        key: `1-0`,
        title: `线条`,
        children: [],
      },
      {
        key: `1-1`,
        title: `标签`,
        children: [],
      },
      {
        key: `1-2`,
        title: `标记符`,
        children: [],
      },
      {
        key: `1-3`,
        title: `复选框`,
        children: [],
      },
      {
        key: `1-4`,
        title: `图片`,
        children: [],
      },
      {
        key: `1-5`,
        title: `编码组`,
        children: [],
      },
      {
        key: `1-6`,
        title: `条形码`,
        children: [],
      },
      {
        key: `1-7`,
        title: `面板`,
        children: [],
      },
      {
        key: `1-8`,
        title: `表格`,
        children: [],
      },
      {
        key: `1-9`,
        title: `列板、行板`,
        children: [],
      },

      // {
      //   key: `1-11`,
      //   title: `交叉表`,
      //   children: [],
      // },
      {
        key: `1-12`,
        title: `公共属性`,
        children: [],
      },
      {
        key: `1-13`,
        title: `变量`,
        children: [],
      },
      {
        key: `1-14`,
        title: `公共事件`,
        children: [],
      },
    ],
  },
  {
    key: `2`,
    title: `工具栏相关`,
    children: [
      {
        key: `2-0`,
        title: `控件拖拽`,
        children: [],
      },
      {
        key: `2-1`,
        title: `撤销回退`,
        children: [],
      },
      {
        key: `2-2`,
        title: `新增页面删除页面`,
        children: [],
      },
      {
        key: `2-3`,
        title: `新建文件，保存`,
        children: [],
      },
      {
        key: `2-4`,
        title: `模板预览`,
        children: [],
      },
      {
        key: `2-5`,
        title: `置前置后`,
        children: [],
      },
      {
        key: `2-6`,
        title: `页面设置`,
        children: [],
      },
    ],
  },
  {
    key: `3`,
    title: `数据集树相关`,
    children: [],
  },
  {
    key: `4`,
    title: `模板制作视频`,
    children: [],
  },
  {
    key: `5`,
    title: `模板树相关`,
    children: [],
  },
  {
    key: `6`,
    title: `模板运行态API`,
    children: [],
  },
  {
    key: `7`,
    title: `画布操作`,
    children: [],
  },
];

export default function HomePage() {
  const [selectedKeys, setSelectedKeys] = useState(['0']);

  const onSelect = (selectedKeys: any, info: any) => {
    if (selectedKeys.length !== 0) {
      setSelectedKeys(selectedKeys);
    } else {
      setSelectedKeys([info.node.key]);
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
              <div>
                <h1>使用入门</h1>
                <p>
                  1.访问对应环境的交付平台:如172.16.7.59 则访问7.59交付平台,
                  输入PMIS账号密码，点击"报表设计器"进入应用
                </p>
                <Image
                  width={600}
                  height={200}
                  src={require('../image/入门1.png')}
                ></Image>
                <p>
                  2.web打印设计器如下图，选中对应的目录，点击工具栏新建新建打印设计模板
                </p>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/入门2.png')}
                ></Image>
                <p>
                  3.输入模板名称，该名称对应左侧树模板展示名称，打开空白画布:
                </p>
                <div className={styles.imageBox}>
                  <div style={{ marginRight: 24 }}>
                    <Image
                      width={300}
                      height={200}
                      src={require('../image/入门3.png')}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      width={300}
                      height={200}
                      src={require('../image/入门4.png')}
                    ></Image>
                  </div>
                </div>
                <p>
                  4.画布分为页眉，正文，页脚，选中正文，页眉或页脚，从工具栏拖拽相应控件到画布:
                </p>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/入门5.png')}
                ></Image>
                <p>
                  5.在画布上点击相应控件，控件呈选中状态，此时可右键单击，设置控件属性，或在画布右侧属性区为控件调整属性,如线条控件右侧属性区分区数设置为4则画布会展示如下效果:
                </p>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/入门6.png')}
                ></Image>
                <p>6.点击工具栏保存，模板会保存到对应目录下。</p>
                <p>7.点击预览，会将模板运行态预览出来:</p>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/入门7.png')}
                ></Image>
              </div>
            ) : selectedKeys[0] == '1-0' ? (
              <div>
                <h1>线条</h1>
                <div>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/线条.jpg')}
                  ></Image>
                </div>
                <LineComp />
              </div>
            ) : selectedKeys[0] == '1-1' ? (
              <div>
                <h1>标签</h1>
                <div>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/标签.jpg')}
                  ></Image>
                </div>
                <TextComp />
              </div>
            ) : selectedKeys[0] == '1-2' ? (
              <div>
                <h1>标记符</h1>
                <div>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/标记符.jpg')}
                  ></Image>
                </div>
                <MarkComp />
              </div>
            ) : selectedKeys[0] == '1-3' ? (
              <div>
                <h1>复选框</h1>
                <div>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/复选框.jpg')}
                  ></Image>
                </div>
                <CheckboxComp />
              </div>
            ) : selectedKeys[0] == '1-4' ? (
              <div>
                <h1>图片</h1>
                <div>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/图片.jpg')}
                  ></Image>
                </div>
                <PicComp />
              </div>
            ) : selectedKeys[0] == '1-5' ? (
              <div>
                <h1>编码组</h1>
                <div>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/编码组.jpg')}
                  ></Image>
                </div>
                <CodecComp />
              </div>
            ) : selectedKeys[0] == '1-6' ? (
              <div>
                <h1>条形码</h1>
                <div>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/条形码.jpg')}
                  ></Image>
                </div>
                <BarCodeComp />
              </div>
            ) : selectedKeys[0] == '1-7' ? (
              <div>
                <h1>面板</h1>
                <div>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/面板.jpg')}
                  ></Image>
                </div>
                <PanelComp />
              </div>
            ) : selectedKeys[0] == '1-8' ? (
              <div>
                <h1>表格</h1>
                <div>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/表格.jpg')}
                  ></Image>
                </div>
                <TableComp />
              </div>
            ) : selectedKeys[0] == '1-9' ? (
              <div>
                <h1>列板、行板</h1>
                <div>
                  <Image
                    width={800}
                    height={500}
                    src={require('../image/行板.jpg')}
                  ></Image>
                </div>
                <RowComp />
              </div>
            ) : selectedKeys[0] == '1-12' ? (
              <div>
                <h1>公共属性</h1>
                <PublicComp />
              </div>
            ) : selectedKeys[0] == '2-0' ? (
              <div>
                <h1>控件拖拽</h1>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/控件拖拽.png')}
                ></Image>
                <p>红色框中的控件支持拖拽，目前支持11种控件的拖拽。</p>
                <p>拖拽注意事项：</p>
                <p>1. 拖拽前，必须先选中要放入的容器。</p>
                <p>2. 拖拽只能拖拽到画布上，其他地方不允许放入。</p>
                <p>
                  3.
                  无法实时获取到拖拽组件在画布位置，只能放到画布(0,0)点的位置。
                </p>
              </div>
            ) : selectedKeys[0] == '2-1' ? (
              <div></div>
            ) : selectedKeys[0] == '2-2' ? (
              <div></div>
            ) : selectedKeys[0] == '2-3' ? (
              <div>
                <h1>新建、文件、保存</h1>
                <p>对应设计器工具栏左侧：</p>
                <Image
                  width={800}
                  height={200}
                  src={require('../image/新建1.png')}
                ></Image>
                <p>1.新建</p>
                <p>
                  在左侧模板树选中对应目录后点击新建新建模板，新建时需输入模板名称，此名称对应左侧模板树展示名称及模板文件名称属性:
                </p>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/新建2.png')}
                ></Image>
                <p>
                  未选中左侧模板树目录而直接点新建按钮时会提示请选择模板存储目录:
                </p>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/新建3.png')}
                ></Image>
                <p>2.文件:打开本地文件实现模板展示及画布预览</p>
                <p>
                  3.保存:
                  当点击左侧模板树在画布渲染出画布之后，点击保存会将画布所做修改进行存库操作，保存成功会提示:保存成功
                </p>
              </div>
            ) : selectedKeys[0] == '2-4' ? (
              <div></div>
            ) : selectedKeys[0] == '2-5' ? (
              <div></div>
            ) : selectedKeys[0] == '2-6' ? (
              <div></div>
            ) : selectedKeys[0] == '3' ? (
              <div>
                <h1>数据集树相关</h1>
                <p>数据集 分为 微服务数据集、JavaBean数据集和SQL数据集。</p>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/数据集1.png')}
                ></Image>
                <p>
                  <b>微服务数据集</b>
                </p>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/数据集2.png')}
                ></Image>
                <p>
                  1.如果 <span style={{ color: 'red' }}>API描述JSON</span>
                   有值,则不请求后台接口， 反之,k请求后台接口。
                </p>
                <p>
                  2.微服务数据集，只能在
                  <span style={{ color: 'red' }}> root</span> 节点建。
                </p>

                <p>
                  <b>JavaBean数据集</b>
                </p>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/数据集3.png')}
                ></Image>
                <p>
                  1.JavaBean 数据集，目前只支持
                  <span style={{ color: 'red' }}>类路径</span>。
                </p>
                <p>
                  2.类路径输入会通过方法校验，
                  <span style={{ color: 'red' }}>要确保类路径输入正确</span>, 
                  如果不正确，无法进行下一步。
                </p>
                <p>
                  3.如果
                  <span style={{ color: 'red' }}>父级没有微服务数据集</span>
                  ，则
                  <span style={{ color: 'red' }}>
                    当前节点无法建JavaBean数据集节点
                  </span>
                  。
                </p>
                <p>
                  4.JavaBean 数据集 下一步的排序字段取得是 微服务
                  ResponseStruct 字段的值。
                </p>
                <p>
                  <b>SQL数据集</b>
                </p>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/数据集4.png')}
                ></Image>
                <p>
                  <span style={{ color: 'red' }}>
                    所有数据集都有下一步 数据分组 操作
                  </span>
                </p>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/数据集5.png')}
                ></Image>
                <p>
                  默认是 <span style={{ color: 'red' }}>不进行分组的</span>
                  。如果要进行分组操作，交互如下图：
                </p>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/数据集6.png')}
                ></Image>
                <p>分组字段和 排序字段是取上一步的propsList 组合而成的。</p>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/数据集7.png')}
                ></Image>
                <p>
                  排序方式 现有三种方式{' '}
                  <span style={{ color: 'red' }}>升序、降序和 原始顺序</span>
                </p>
                <Image
                  width={300}
                  height={200}
                  src={require('../image/数据集8.png')}
                ></Image>
              </div>
            ) : selectedKeys[0] == '4' ? (
              <div>
                <h1>模板制作视频讲解</h1>
                <p>主要针对SQL数据集培训</p>
                <p>
                  链接:{' '}
                  <a
                    href="https://pan.baidu.com/s/15vBBnnKSXrB9w80lDR-B-Q?pwd=hdur"
                    target="_blank"
                  >
                    https://pan.baidu.com/s/15vBBnnKSXrB9w80lDR-B-Q?pwd=hdur
                  </a>
                  提取码: hdur
                </p>
              </div>
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
}
