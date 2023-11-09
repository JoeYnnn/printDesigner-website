import { Link, Outlet, useLocation, history } from 'umi';
import styles from './index.less';

import { useEffect, useState, useRef } from 'react';
import { Button, Layout, Menu, ConfigProvider } from 'antd';
const { Header, Content, Footer } = Layout;
import zhCN from 'antd/locale/zh_CN';
import { useScroll } from 'ahooks';

const App = () => {
  const location = useLocation();
  const [selectKeys, setSelectKeys] = useState('1');
  const ref = useRef<any>(null);
  const headerRef = useRef<any>(null);
  const scroll = useScroll(document);

  const onClick = (e: any) => {
    if (e == 1) {
      //首页
      history.push('/');
    }
    if (e == 2) {
      //文档
      history.push('/docPage');
    }
    if (e == 3) {
      //案例
      history.push('/casePage');
    }
    if (e == 4) {
      //资源
      history.push('/sourcePage');
    }
    if (e == 5) {
      //关于
      history.push('/aboutPage');
    }
    setSelectKeys(e.toString());
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

    localStorage.clear();
    sessionStorage.clear();
    clearAllCookie();
  }, [location]);

  const clearAllCookie = () => {
    document.cookie
      .split(';')
      .forEach(
        (cookie) =>
          (document.cookie = cookie
            .replace(/^ +/, '')
            .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`)),
      );
  };

  useEffect(() => {
    if (scroll?.top == 0) {
      headerRef.current.className = `${styles.header}`;
    } else {
      headerRef.current.className = `${styles.header} ${styles.shadow}`;
    }
  }, [scroll?.top]);

  return (
    <ConfigProvider locale={zhCN} theme={{ token: { borderRadius: 2 } }}>
      <Layout className={styles.layout}>
        <Header className={styles.header} ref={headerRef}>
          <div className={styles.navs} ref={ref}>
            <div className={styles.navsLeft}>
              <div className={styles.logo}>
                <div className={styles.logoContent}></div>
                <div className={styles.logoText}>WXP打印设计器</div>
              </div>
              <div className={styles.menuList}>
                <div
                  onClick={() => onClick(1)}
                  className={`${selectKeys == '1' ? styles.hover : {}}`}
                >
                  首页
                </div>
                <div
                  onClick={() => onClick(2)}
                  className={`${selectKeys == '2' ? styles.hover : {}}`}
                >
                  文档
                </div>
                <div
                  onClick={() => onClick(3)}
                  className={`${selectKeys == '3' ? styles.hover : {}}`}
                >
                  案例
                </div>
                <div
                  onClick={() => onClick(4)}
                  className={`${selectKeys == '4' ? styles.hover : {}}`}
                >
                  资源
                </div>
                <div
                  onClick={() => onClick(5)}
                  className={`${selectKeys == '5' ? styles.hover : {}}`}
                >
                  关于
                </div>
              </div>
            </div>

            <div>
              <Button
                type="primary"
                style={{ borderRadius: 4, width: 96, background: '#2D5AFA' }}
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
