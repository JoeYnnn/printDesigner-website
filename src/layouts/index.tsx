import { Link, Outlet, useLocation, history } from 'umi';
import styles from './index.less';

import { useEffect, useState } from 'react';
import { Button, Layout, Menu, ConfigProvider } from 'antd';
const { Header, Content, Footer } = Layout;
import zhCN from 'antd/locale/zh_CN';

const App = () => {
  const location = useLocation();
  const [selectKeys, setSelectKeys] = useState('1');

  const onClick = (e: any) => {
    if (e.key == 1) {
      //首页
      history.push('/');
    }
    if (e.key == 2) {
      //文档
      history.push('/docPage');
    }
    if (e.key == 3) {
      //案例
      history.push('/casePage');
    }
    if (e.key == 4) {
      //资源
      history.push('/sourcePage');
    }
    if (e.key == 5) {
      //关于
      history.push('/aboutPage');
    }
  };

  const download = () => {
    history.push('/sourcePage');
  };

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setSelectKeys('1');
        break;
      case '/docPage':
        setSelectKeys('2');
        break;
      case '/casePage':
        setSelectKeys('3');
        break;
      case '/sourcePage':
        setSelectKeys('4');
        break;
      case '/aboutPage':
        setSelectKeys('5');
        break;

      default:
        break;
    }
  }, [location]);

  return (
    <ConfigProvider locale={zhCN} theme={{ token: { borderRadius: 2 } }}>
      <Layout className={styles.layout}>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className={styles.navs}>
            <div className={styles.navsLeft}>
              <div className={styles.logo}>Logo</div>
              <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[selectKeys]}
                onClick={onClick}
                items={[
                  {
                    key: 1,
                    label: `首页`,
                  },
                  {
                    key: 2,
                    label: `文档`,
                  },
                  {
                    key: 3,
                    label: `案例`,
                  },
                  {
                    key: 4,
                    label: `资源`,
                  },
                  {
                    key: 5,
                    label: `关于`,
                  },
                ]}
              />
            </div>

            <div>
              <Button
                type="primary"
                style={{ borderRadius: 2 }}
                onClick={download}
              >
                下载
              </Button>
            </div>
          </div>
        </Header>
        <Content>
          <div className={styles.layoutContent}>
            <Outlet />
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        ></Footer> */}
      </Layout>
    </ConfigProvider>
  );
};
export default App;
