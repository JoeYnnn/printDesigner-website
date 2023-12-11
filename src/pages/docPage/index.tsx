import { Tree, Image, Table, Menu, Layout } from 'antd';
import styles from './index.less';
import { useEffect, useState } from 'react';
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
const { Sider } = Layout;

function getItem(label: any, key: any, icon?: any, children?: any, type?: any) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export default function HomePage() {
  const [selectedKeys, setSelectedKeys] = useState(['0-0']);
  const [openKeys, setOpenKeys] = useState(['0']);
  const rootSubmenuKeys = ['0', '1', '2', '3', '4', '5', '6', '8'];

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const items = [
    getItem('使用入门', '0', null, [getItem('使用入门', '0-0')]),
    getItem('组件相关', '1', null, [
      getItem('线条', '1-0'),
      getItem('标签', '1-1'),
      getItem('标记符', '1-2'),
      getItem('复选框', '1-3'),
      getItem('图片', '1-4'),
      getItem('编码组', '1-5'),
      getItem('条形码', '1-6'),
      getItem('面板', '1-7'),
      getItem('表格', '1-8'),
      getItem('列板、行板', '1-9'),
      getItem('公共属性', '1-12'),
    ]),
    getItem('工具栏相关', '2', null, [
      getItem('控件拖拽', '2-0'),
      getItem('撤销回退', '2-1'),
      getItem('新增页面删除页面', '2-2'),
      getItem('新建文件，保存', '2-3'),
      getItem('模版预览', '2-4'),
      getItem('置前置后', '2-5'),
      getItem('页面设置', '2-6'),
    ]),
    getItem('数据集树相关', '3', null, [getItem('数据集树相关', '3-0')]),
    getItem('模版制作视频', '4', null, [getItem('模版制作视频', '4-0')]),
    getItem('模版树相关', '5', null, [getItem('模版树相关', '5-0')]),
    getItem('模版运行态API', '6', null, [getItem('模版运行态API', '6-0')]),
    getItem('混合框架打印对接', '8', null, [
      getItem('混合框架打印对接', '8-0'),
    ]),
  ];

  const dataSource = [
    {
      key: '1',
      name: 'winning.report.printSvg(string printerName, string svgStrs,string printParams)',
      description: 'svg 打印',
    },
    {
      key: '2',
      name: 'winning.report.getPrinters()',
      description: '获取打印机列表',
      values: '0.25-10.0',
    },
    {
      key: '3',
      name: 'winning.report.savePrintConfig(string configFileName, string config)',
      description: '打印机配置保存',
      values: ``,
    },
    {
      key: '4',
      name: 'winning.report.loadPrintConfig(string configFileName)',
      description: '加载打印机配置',
      values: '平行、起点相同、终点相同',
    },
  ];
  const columns = [
    {
      title: '接口',
      dataIndex: 'name',
      key: 'name',
      width: '40%',
    },
    {
      title: '功能报表',
      dataIndex: 'description',
      key: 'description',
      width: '10%',
    },
    {
      title: '参数说明',
      dataIndex: 'values',
      key: 'values',
      width: '50%',
      render: (text: any, record: any, index: any) => {
        console.log(index);
        if (index == 0) {
          return (
            <>
              <div>printerName：打印机名称</div>
              <div>svgStrs：svg内容</div>
              <div>（多页打印格式如下：</div>
              <div>{'<pages>'}</div>
              <div style={{ paddingLeft: 12 }}>{'<page>'}</div>
              <div style={{ paddingLeft: 24 }}>{'<svg>....</svg>'}</div>
              <div style={{ paddingLeft: 12 }}>{'</page>'}</div>
              <div style={{ paddingLeft: 12 }}>{'<page>'}</div>
              <div style={{ paddingLeft: 24 }}>{'<svg>....</svg>'}</div>
              <div style={{ paddingLeft: 12 }}>{'</page>'}</div>
              <div>{'</page>'}</div>
              <div>{')'}</div>
              <div>
                printParams：
                打印参数(必传：printerName，其他参数根据需求场景选择)
              </div>
              <div>{'{'}</div>
              <div>
                "printerName":"Microsoft Print to PDF",//
                打印机名称，默认使用本地默认打印机
              </div>
              <div>
                "paperSide": 0 , // 单双面打印，默认值 0，单面 1，手动双面
                2，自动双面（长边）3，自动双面（短边）4
              </div>
              <div>"printCopies": 1, // 打印份数，默认值 1</div>
              <div>
                "printCollate":false, // 文档是否逐份打印，默认值
                false(需要打印机支持)
              </div>
              <div>
                逐份：1，2，3，4，1，2，3，4），逐页：1，1，2，2，3，3，4，4
              </div>
              <div>"offsetX": 0.0, // 水平偏移 单位 mm</div>
              <div>"offsetY": 0.0, // 垂直偏移 单位 mm</div>
              <div>
                "doubleAutoForceOddStart": false, //
                自动双面打印，偶数页开始是否强制不填充空白页
              </div>
              <div>
                "printMode": 0, // 0 无任何模式，2 一般续打，4
                一般补打(包括撤销打印)，8
                混合打印(续、补打)，该参数仅适用医嘱单打印
              </div>
              <div>{'}'}</div>
            </>
          );
        } else if (index == 1) {
          return <>列表第一个为默认打印机</>;
        } else if (index == 2) {
          return (
            <>
              <div>文件保存目录：混合框架/report_configs</div>
              <div>configFileName： 配置文件名称</div>
              <div>config：打印机配置（自己定义文件内容）</div>
            </>
          );
        } else if (index == 3) {
          return <>configFileName： 配置文件名称</>;
        }
      },
    },
  ];

  const dataSource1 = [
    {
      key: '1',
      name: 'sessionStorageAuthorization',
      description: '业务用户登录信息，业务系统里的 sessionStorage里的',
    },
    {
      key: '1-1',
      name: 'sessionStorageUserInfo',
      description:
        '业务用户登录后的用户信息业务系统里的 sessionStorage里的userInfo字段(登录后写入)，用以获取租户信息 形如: {"userHopitalSOID": "256181"}',
    },
    {
      key: '2',
      name: 'id',
      description: '模板id',
    },
    {
      key: '2-1',
      name: 'code',
      description: '模板分类编码(业务定义)',
    },
    {
      key: '3',
      name: 'businessData',
      description: '业务数据',
    },
    {
      key: '4',
      name: 'callBackFunc',
      description:
        '回调函数，在指定步长转换完成后sdk调用，参数分别是(svg, startPageNo, ending, percent, identifier)',
    },
    {
      key: '5',
      name: 'transferStep',
      description:
        '同时渲染模板个数步长,即转换几页之后就开始渲染并执行回调方法',
    },
    {
      key: '6',
      name: 'urlPrefix',
      description: '环境对应的交付平台前缀，一般为业务host+ ‘wxp-designer’',
    },
    {
      key: '7',
      name: 'identifier',
      description:
        '一个固定字符串，业务传进来，回调的时候传回去，避免回调没结束',
    },
    {
      key: '8',
      name: 'callbackData',
      description: '是否返回页尾最后一行叶子节点数据',
    },
    {
      key: '9',
      name: 'throwCallBack',
      description: '异常抛出的回调',
    },
  ];
  const columns1 = [
    {
      title: '参数',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      width: '80%',
    },
  ];

  const onSelect = (info: any) => {
    setSelectedKeys([info.key]);
  };

  return (
    <div className={styles.indexContent}>
      <Layout>
        <Sider width={255} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            onSelect={onSelect}
            selectedKeys={selectedKeys}
            style={{ width: 256, height: '100%' }}
            items={items}
          />
        </Sider>
        <Layout style={{ padding: '0' }}>
          <div className={styles.componentContent1}>
            <div className={styles.content}>
              <div className={styles.mainContent}>
                {selectedKeys[0] == '0-0' ? (
                  <div>
                    <h1>使用入门</h1>
                    <p>
                      1.访问对应环境的交付平台:如
                      <a href="http://wxp.cdp.iwincloud.com:8091/deliver/index.html#/home">
                        http://wxp.cdp.iwincloud.com:8091/deliver/index.html#/home
                      </a>
                      , 输入PMIS账号密码，点击"报表设计器"进入应用
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
                      5.在画布上点击相应控件，控件呈选中状态，此时可右键单击，设置控件属性，或在画布右侧属性区为控件调整
                    </p>
                    <p>
                      属性,如线条控件右侧属性区分区数设置为4则画布会展示如下效果:
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
                  <div>
                    <h1>撤销回退</h1>
                    <Image
                      width={300}
                      height={200}
                      src={require('../image/撤销回退.jpg')}
                    ></Image>
                    <p>针对用户最近十步的所有操作，支持撤回操作与重做操作。</p>
                    <p>超过十步的内容会被最近十步的操作所覆盖</p>
                  </div>
                ) : selectedKeys[0] == '2-2' ? (
                  <div>
                    <h1>新增页面删除页面</h1>
                    <Image
                      width={300}
                      height={200}
                      src={require('../image/新增删除页面.jpg')}
                    ></Image>
                    <p></p>
                    <Image
                      width={300}
                      height={200}
                      src={require('../image/新增删除页面1.png')}
                    ></Image>
                    <p></p>
                    <p>
                      通过点击新增页面/删除页面增加多一页模板，渲染模版的时候将会以新增的所有页面为整体来进行循环
                    </p>
                  </div>
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
                  <div>
                    <h1>模板预览</h1>
                    <Image
                      width={300}
                      height={200}
                      src={require('../image/模版预览1.jpg')}
                    ></Image>
                    <p>
                      设计器提供了三种预览模式：预置预览、模拟预览、打印预览
                    </p>
                    <h2>预置预览：</h2>
                    <p>
                      提供功能可使用户提前为某些模版保存数据，点击
                      <span style={{ color: '' }}>预置预览</span>
                      可直接调取预置好的数据进行打印预览操作
                    </p>
                    <h2>模拟预览：</h2>
                    <p>
                      提供功能可使用户自定义模版数据，点击提交使用当前输入的数据进行打印预览操作
                    </p>
                    <p>此数据为一次性，使用之后需重新提供数据进行预览操作</p>
                    <p>如需多次调试模版，建议使用预置数据和预置预览功能</p>
                    <h2>打印预览</h2>
                    <p>
                      按照模版内定义的数据源去请求接口获取数据，再进行预览操作
                    </p>
                  </div>
                ) : selectedKeys[0] == '2-5' ? (
                  <div>
                    <h1>置前置后</h1>
                    <Image
                      width={300}
                      height={200}
                      src={require('../image/置前置后.jpg')}
                    ></Image>
                    <p>置前置后功能是将画布内组件的垂直方向层级进行改动</p>
                  </div>
                ) : selectedKeys[0] == '2-6' ? (
                  <div>
                    <h1>页面设置</h1>
                    <Image
                      width={300}
                      height={200}
                      src={require('../image/页面设置.jpg')}
                    ></Image>
                    <p>
                      页面设置功能包括：纸张类型、纸张方向、进纸方向、页边距以及页面页脚功能
                    </p>
                    <h1>纸张类型</h1>
                    <p>设计器预置了十几种常用纸张类型以及尺寸大小可供选择</p>
                    <p>
                      同时也支持用户自定义纸张大小，使用自定义纸张时只需讲纸张类型选为自定义即可
                    </p>
                    <p>
                      <b>特殊纸张</b>
                      ：指【小票（瓶贴）】和【打孔纸】相关纸张类型打印。通常处理连续纸张打印，即
                    </p>
                    高度跟随内容多少而变化，最大为设置的纸张尺寸。
                    <p></p>
                    <h1>方向</h1>
                    <p>指纸张方向，通常与打印相结合使用。</p>
                    <h1>进纸方向</h1>
                    <p>
                      指放入打印机时纸张的方向，短边进入为纵向，长边进入为横向。
                    </p>
                    <h1>页边距</h1>
                    <p>控制画布与边缘的四个方向的距离长度</p>
                    <p>注意：由于部分打印机不支持无边距，所以预留不能太小。</p>
                    <p>
                      建议：普通打印 即 A3、A4、B5、B6 纸张预留不得低于
                      5mm。瓶贴、标签打印则无要求。
                    </p>
                    <h1>页眉页脚</h1>
                    <p>控制画布页眉页脚是否显示</p>
                    <p>
                      页眉、页脚内容每页打印都会展示。通常设置模板标题、页码、备注信息以及每页相同不发生变化的内容。
                    </p>
                  </div>
                ) : selectedKeys[0] == '3-0' ? (
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
                      <span style={{ color: 'red' }}>要确保类路径输入正确</span>
                      ,  如果不正确，无法进行下一步。
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
                      <span style={{ color: 'red' }}>
                        升序、降序和 原始顺序
                      </span>
                    </p>
                    <Image
                      width={300}
                      height={200}
                      src={require('../image/数据集8.png')}
                    ></Image>
                  </div>
                ) : selectedKeys[0] == '4-0' ? (
                  <div>
                    <h1>模板相关视频讲解</h1>

                    <p>培训视频</p>
                    <p>
                      链接:{' '}
                      <a
                        href="https://winwiki.winning.com.cn/pages/viewpage.action?pageId=20409180"
                        target="_blank"
                      >
                        https://winwiki.winning.com.cn/pages/viewpage.action?pageId=20409180
                      </a>
                    </p>
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
                    <p>混合框架对接</p>
                    <p>
                      链接:{' '}
                      <a
                        href="https://winwiki.winning.com.cn/pages/viewpage.action?pageId=20409168"
                        target="_blank"
                      >
                        https://winwiki.winning.com.cn/pages/viewpage.action?pageId=20409168
                      </a>
                    </p>
                  </div>
                ) : selectedKeys[0] == '5-0' ? (
                  <div>
                    <h1>模版树相关</h1>
                    <p>一级树节点不支持操作，为默认内容</p>
                    <Image
                      width={800}
                      height={500}
                      src={require('../image/模板树1.jpg')}
                    ></Image>
                    <p>二级树节点支持新建自定义文件夹以及刷新操作</p>
                    <Image
                      width={800}
                      height={500}
                      src={require('../image/模板树2.jpg')}
                    ></Image>
                    <p>三级文件夹支持更多功能的操作：</p>
                    <p>新建模板：在当前文件夹下创建一个新的空模版</p>
                    <p>新建文件夹：在当前文件夹下创建一个新的文件夹</p>
                    <p>重命名：重命名当前文件夹名称</p>
                    <p>删除文件夹 ：删除当前文件夹</p>
                    <p>上传文件：将本地XML模板上传至当前文件夹下</p>
                    <p>刷新：刷新当前模板树</p>
                    <Image
                      width={800}
                      height={500}
                      src={require('../image/模板树3.jpg')}
                    ></Image>
                    <p>模版的右键操作列表：</p>
                    <p>重命名：重命名当前模板的名称</p>
                    <p>删除模板：删除当前模板</p>
                    <p>上传文件：将本地XML模板上传至当前文件夹下</p>
                    <p>下载文件：讲当前XML模板下载至本地电脑内</p>
                    <p>刷新：刷新当前模板树</p>
                    <p>
                      创建副本：将当前模板以一个新的名字创建一个相同的副本模板
                    </p>
                  </div>
                ) : selectedKeys[0] == '6-0' ? (
                  <div>
                    <h1>模板运行态API</h1>
                    <h2>提供四种API进行多情况下的调用</h2>
                    <h3>previewWithCallBack(参数顺序不可改变)</h3>
                    <b>依据打印设计器内部id异步预览API</b>
                    <p>
                      function previewWithCallBack( sessionStorageAuthorization,
                      id, businessData, callBackFunc,
                    </p>
                    <p>transferStep, urlPrefix, identifier, callbackData )</p>
                    <h3>previewByCodeWithCallBack(参数顺序不可改变)</h3>
                    <b>使用业务编码与打印设计器映射异步预览API</b>
                    <p>
                      function previewByCodeWithCallBack(
                      sessionStorageUserInfo, sessionStorageAuthorization, code,
                      businessData, callBackFunc,
                    </p>
                    <p>
                      transferStep, urlPrefix?, identifier, throwCallBack,
                      callbackData)
                    </p>
                    <h3>previewWithFetchTemplateByCode(参数顺序不可改变)</h3>
                    <b>使用业务编码与打印设计器映射获取打印模版内容</b>
                    <p>
                      function previewWithFetchTemplateByCode(
                      sessionStorageUserInfo, sessionStorageAuthorization, code,
                      urlPrefix, callbackData)
                    </p>
                    <h3>
                      previewWithFetchTemplateByCodeTransferStep(参数顺序不可改变)
                    </h3>
                    <b>直接使用打印模版内容进行异步预览 </b>
                    <p>
                      function previewWithFetchTemplateByCodeTransferStep(
                      reportXML, businessData, callBackFunc, transferStep,
                      identifier, callbackData)
                    </p>

                    <p>参数说明：</p>
                    <Table
                      dataSource={dataSource1}
                      columns={columns1}
                      pagination={false}
                      style={{ width: 1000 }}
                      bordered
                    />
                    <p>
                      更多详细内容请跳转至项目对接示例DEMO内查看{' '}
                      <a
                        href="https://winwiki.winning.com.cn/pages/viewpage.action?pageId=55116755"
                        target="_blank"
                      >
                        点此跳转
                      </a>
                    </p>
                  </div>
                ) : selectedKeys[0] == '8-0' ? (
                  <div>
                    <h1>混合框架打印对接</h1>
                    <Table
                      dataSource={dataSource}
                      columns={columns}
                      pagination={false}
                      style={{ width: 1000 }}
                      bordered
                    />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </Layout>
      </Layout>

      {/* <div className={styles.componentContent1}>
        <div className={styles.content}>
          <div className={styles.leftNav}></div>
          <div className={styles.mainContent}></div>
        </div>
      </div> */}
    </div>
  );
}
