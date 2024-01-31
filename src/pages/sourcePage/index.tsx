import { List, Typography } from 'antd';
import { Anchor, Menu, Layout } from 'antd';
import styles from './index.less';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'umi';
const { Sider } = Layout;
import { useScroll } from 'ahooks';

function getItem(label: any, key: any, icon?: any, children?: any, type?: any) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

let log = [
  {
    label: 'PangoPrint-0.6.2',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-local:pango-print/pango-print-0.6.2.tgz',
    time: '2024-01-13 10:28:24',
    sdk: 'http://172.16.9.57:8081/repository/npm-local/pango-print/-/pango-print-0.6.2.tgz',
    dll: 'http://wxp.cpp.iwincloud.com:8089/oss/tmts/pango-print/0.6.2/win/dll/ThirdLib.zip',
    pdf: 'http://172.16.0.197:8089/cloud/CloudProductServlet?version=4d552814d3b04d4f95514793587a9d9e',
    log: [
      '设计区域大于纸张大小的情况高度计算问题(预判高度超出即不再循环的问题)',
      '2个行板中间出现空行板时可能造成的循环调用，渲染没任何效果的问题',
      '多页打印模版worker下不渲染的问题',
      '补齐空行行板随数据集循环时，当数据正好截断时会无限循环的问题',
      '打印预览字体某些情况未生效问题',
      '特殊情况每页打印不生效的问题',
      '优化表格选择框显示渲染逻辑',
      '单元格坐标计算问题调整',
      '多页打印模版横纵向设置不生效的问题',
      '尾行每页打印优化',
      '其他功能优化及BUG修复',
    ],
  },
  {
    label: 'PangoPrint-0.6.1',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-local:pango-print/pango-print-0.6.1.tgz',
    time: '2023-09-26 13:57:37',
    sdk: 'http://172.16.9.57:8081/repository/npm-local/pango-print/-/pango-print-0.6.1.tgz',
    dll: 'http://wxp.cpp.iwincloud.com:8089/oss/tmts/pango-print/0.6.1/win/dll/ThirdLib.zip',
    pdf: 'http://172.16.0.197:8089/cloud/CloudProductServlet?version=0caeedab0e604318b5b17b0e30388dbd',
    log: [
      '拆分主包,单独编译第三方库',
      'image控件url相同时判断使用缓存',
      '其余代码优化及bug修复',
    ],
  },
  {
    label: 'PangoPrint-0.6.0',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-local:pango-print/pango-print-0.6.0.tgz',
    time: '2023-09-20 11:18:21',
    sdk: 'http://172.16.9.57:8081/repository/npm-local/pango-print/-/pango-print-0.6.0.tgz',
    dll: 'http://wxp.cpp.iwincloud.com:8089/oss/tmts/pango-print/0.6.0/win/dll/ThirdLib.zip',
    pdf: 'http://172.16.0.197:8089/cloud/CloudProductServlet?version=0caeedab0e604318b5b17b0e30388dbd',
    log: [
      '复选框文本宽度，自动换行逻辑，格子文本对齐逻辑调整',
      '最大行数设置逻辑调整',
      '模版传空数据时预览白页问题',
      '二维码margin设置',
      '每页打印逻辑调整',
      '其余代码优化及bug修复',
    ],
  },
  {
    label: 'PangoPrint-0.5.9',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-local:pango-print/pango-print-0.5.9.tgz',
    time: '2023-09-07 10:35:43',
    sdk: 'http://172.16.9.57:8081/repository/npm-local/pango-print/-/pango-print-0.5.9-beta.tgz',
    dll: 'http://wxp.cpp.iwincloud.com:8089/oss/tmts/pango-print/0.5.9/win/dll/ThirdLib.zip',
    pdf: 'http://172.16.0.197:8089/cloud/CloudProductServlet?version=0caeedab0e604318b5b17b0e30388dbd',
    log: [
      '行板内嵌套行板(表头行板)循环时出现的重叠+临界情况下(如换页情况下表头有2行，前一页打了一行，第二页还剩余一行表头)表头需再第二页依旧打印',
      '公卫同时打临界问题修正',
    ],
  },
  {
    label: 'PangoPrint-0.5.8',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.8.tgz',
    time: '2023-06-14 15:57:07',
    sdk: 'http://172.16.9.57:8081/repository/npm-local/pango-print/-/pango-print-0.5.8.tgz',
    dll: 'http://wxp.cpp.iwincloud.com:8089/oss/tmts/pango-print/0.5.8/win/dll/ThirdLib.zip',
    pdf: '',
    log: [
      '行板到页尾临界值循环截断的问题',
      '新增事件代码依据名称寻找控件逻辑',
      '运行态免建Bean数据集',
      'node环境代码兼容',
      'sql数据集导入问题',
      '模版查询支持依据orgId查询(多院区同单据模版绑定问题)',
      '多数据源soid置入到http请求header',
      'simpleNodeTree上构造parentKey属性',
      '新增获取指定nodePath当级及下级全部树结构API',
      '数据集与swagger描述生成属性使用fieldType区分',
      '数据集默认展示全部API描述结构',
      '数值小数位数精度抽取为全局函数',
      '行板未绑定数据或数据为空时不展示空行',
      'sql数据集多级循环数据嵌套渲染不正确的问题',
      '格式化模型FromXML ToXML改造',
      '属性区格式化模型改造',
      'sql主子数据集数据计算',
      '代码区提示Me对象模型',
      '其余代码优化及bug修复',
    ],
  },
  {
    label: 'PangoPrint-0.5.7',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.7.tgz',
    time: '2023-04-13 10:17:50',
    sdk: 'http://172.16.9.57:8081/repository/npm-local/pango-print/-/pango-print-0.5.7.tgz',
    dll: 'http://wxp.cpp.iwincloud.com:8089/oss/tmts/pango-print/0.5.7/win/dll/ThirdLib.zip',
    pdf: '',
    log: [
      'sql数据集主子关系模型及渲染',
      '某些特殊情况模板运行报undefined doesnot has trim attr',
      'sql数据集预览时批量请求',
      '数据集类型优化',
      '其余代码优化及bug修复',
    ],
  },
  {
    label: 'PangoPrint-0.5.6',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.6.tgz',
    time: '2023-04-03 16:20:36',
    sdk: 'http://172.16.9.57:8081/repository/npm-local/pango-print/-/pango-print-0.5.6.tgz',
    dll: 'http://wxp.cpp.iwincloud.com:8089/oss/tmts/pango-print/0.5.6/win/dll/ThirdLib.zip',
    pdf: '',
    log: [
      '清空医嘱回调发挥全部回调数据',
      '清空医嘱需求-分组换页rowIx 为-1',
      '调新增开关支持返回页尾最后一行叶子节点数据，供业务获取以标记printEndLine(续打结束行)',
      '其余代码优化及bug修复',
    ],
  },
  {
    label: 'PangoPrint-0.5.5',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.5.tgz',
    time: '2023-03-31 14:43:40',
    sdk: 'http://172.16.9.57:8081/repository/npm-local/pango-print/-/pango-print-0.5.5.tgz',
    dll: 'http://wxp.cpp.iwincloud.com:8089/oss/tmts/pango-print/0.5.5/win/dll/ThirdLib.zip',
    pdf: '',
    log: [
      '模板新建页面extPages模型不正确的问题',
      'responseJSON格式化后保存丢失的问题',
      '新增获取模板内容API',
      '续打计算到页尾则忽略当前页，从下一页开始展示',
      '某些特殊情况续打白页问题',
      '其余代码优化及bug修复',
    ],
  },
  {
    label: 'PangoPrint-0.5.4',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.4.tgz',
    time: '2023-03-17 21:09:34',
    sdk: 'http://172.16.9.57:8081/repository/npm-local/pango-print/-/pango-print-0.5.4.tgz',
    dll: 'http://wxp.cpp.iwincloud.com:8089/oss/tmts/pango-print/0.5.4/win/dll/ThirdLib.zip]',
    pdf: '',
    log: ['执行项目表打到页尾时渲染不出来的问题', '其余代码优化及bug修复'],
  },
  {
    label: 'PangoPrint-0.5.3',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.3.tgz',
    time: '2023-03-14 15:01:58',
    sdk: 'http://172.16.9.57:8081/repository/npm-local/pango-print/-/pango-print-0.5.3.tgz',
    dll: 'http://wxp.cpp.iwincloud.com:8089/oss/tmts/pango-print/0.5.3/win/dll/ThirdLib.zip',
    pdf: '',
    log: [
      '一式多分某些情况行板循环问题',
      '数据集节点支持中文展示',
      'web-worker任务请求完clean up',
      '编码组文本默认使用变量的问题',
      '换行文本PrintCurPage指定不生效',
      '其余代码优化及bug修复',
    ],
  },
  {
    label: 'PangoPrint-0.5.2',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.2.tgz',
    time: '2023-03-09 16:45:35',
    sdk: 'http://172.16.9.57:8081/repository/npm-local/pango-print/-/pango-print-0.5.2.tgz',
    dll: 'http://wxp.cpp.iwincloud.com:8089/oss/tmts/pango-print/0.5.2/win/dll/ThirdLib.zip',
    pdf: '',
    log: ['函数执行$$设置为内置变量', '其余代码优化及bug修复'],
  },
  {
    label: 'PangoPrint-0.5.1',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.1.tgz',
    time: '2023-03-08 10:31:03',
    sdk: 'http://172.16.9.57:8081/repository/npm-local/pango-print/-/pango-print-0.5.1.tgz',
    dll: 'http://wxp.cpp.iwincloud.com:8089/oss/tmts/pango-print/0.5.1/win/dll/ThirdLib.zip',
    pdf: '',
    log: [
      '二维码或条码无值时直接不渲染而非按winning默认值',
      '换行文本续打标识重叠问题',
      '脚本执行设置了名称但未写脚本时console报错问题',
      '其余代码优化及bug修复',
    ],
  },
  {
    label: 'PangoPrint-0.5.0',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.0.tgz',
    time: '2023-02-28 15:02:34',
    sdk: 'http://172.16.9.57:8081/repository/npm-local/pango-print/-/pango-print-0.5.0.tgz',
    dll: 'http://wxp.cpp.iwincloud.com:8089/oss/tmts/pango-print/0.5.0/win/dll/ThirdLib.zip',
    pdf: '',
    log: [
      '编码组控件运行态',
      '多级分组行板循环数据一式多份问题',
      '多级分组行板循环数据丢失问题',
      '数据集支持多级分组',
      '根节点分组情况设计态fields不展示的问题',
      '其余代码优化及bug修复',
    ],
  },
];

const index = () => {
  const [selectedKeys, setSelectedKeys] = useState(['1']);
  const indexRef = useRef<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const [openKeys, setOpenKeys] = useState(['1']);
  const rootSubmenuKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const [targetOffset, setTargetOffset] = useState<number>();
  const scroll = useScroll(document);

  const onOpenChange = (keys: any) => {
    console.log(keys);

    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const items = [getItem('更新日志', '1'), getItem('WIKI', '2')];

  useEffect(() => {
    let key: any = searchParams.get('key');

    if (searchParams.get('key')) {
      key = searchParams.get('key');
    } else {
      key = '1';
    }
    setOpenKeys([key.split('-')[0]]);
    setSelectedKeys([key]);
  }, [searchParams]);

  const onSelect = (info: any) => {
    setSelectedKeys([info.key]);
    setSearchParams({ key: info.key });
  };

  const getAnchorList = () => {
    let arr: any = [];
    log.map((item, key) => {
      arr.push({
        key: key,
        href: `#${item.label}`,
        title: item.label,
      });
    });
    return arr;
  };

  const getContainer: any = () => {
    return document.getElementById('scrollBox');
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
          <div className={styles.componentContent1} id="scrollBox">
            <div className={styles.content}>
              <div className={styles.mainContent} ref={indexRef}>
                {selectedKeys[0] == '1' ? (
                  <List style={{ width: '100%' }}>
                    <h1>更新日志</h1>
                    {log.map((item, key) => {
                      return (
                        <List.Item key={key} id={`${item.label}`}>
                          <div className={styles.contentList}>
                            <h1>{item.label}</h1>
                            <h3>{item.time}</h3>
                            <p>资源</p>
                            <ul>
                              <li>
                                <a href={item.sdk}>SDK</a>
                              </li>
                              <li>
                                <a href={item.dll}>DLL</a>
                              </li>
                              {item.pdf && (
                                <li>
                                  <a href={item.pdf}>PDF</a>
                                </li>
                              )}
                            </ul>
                            <p>更新内容</p>
                            <ol>
                              {item.log.map((i, k) => {
                                return <li key={k}>{i}</li>;
                              })}
                            </ol>
                          </div>
                        </List.Item>
                      );
                    })}
                  </List>
                ) : selectedKeys[0] == '2' ? (
                  <div>
                    <h1>WIKI</h1>
                    <p>
                      <a
                        href={
                          'https://winwiki.winning.com.cn/pages/viewpage.action?pageId=37993812'
                        }
                      >
                        https://winwiki.winning.com.cn/pages/viewpage.action?pageId=37993812
                      </a>
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Layout>
        {selectedKeys[0] == '1' && (
          <Anchor
            affix
            style={{
              width: 200,
              background: '#fff',
              height: 'calc(100vh - 80px)',
            }}
            items={getAnchorList()}
            targetOffset={200}
            getContainer={getContainer}
          />
        )}
      </Layout>
    </div>
  );
};

export default index;
