import { Button, Carousel, Image } from 'antd';
import styles from './index.less';
import { history } from 'umi';

export default function HomePage(props: any) {
  const routeToDoc = () => {
    history.push('/docPage');
  };

  const getMore = () => {
    history.push('/casePage');
  };

  const startUse = () => {
    history.push('/docPage');
  };

  const caseClick = (key: any) => {
    console.log(key);
    if (key == 1) {
      history.push('/casePage?key=3-3');
    } else if (key == 2) {
      history.push('/casePage?key=9-2');
    } else if (key == 3) {
      history.push('/casePage?key=8');
    }
  };

  return (
    <div className={styles.indexContent}>
      <div className={styles.componentContent1}>
        <div className={styles.content}>
          <div className={styles.titleBox}>
            <div style={{ fontSize: 36, marginBottom: 12, fontWeight: 'bold' }}>
              打印模版设计器
            </div>
            <div
              style={{
                fontSize: 22,
                color: 'rgba(0,0,0, 0.75)',
                marginBottom: 12,
              }}
            >
              WXP打印设计器是WXP研发平台部研发的web浏览器端的打印组件，功能丰富，支持常见的控件如：线条，文本框，复选框，图片(条形码)，表格，交叉表等。
            </div>
            <div>
              <Button
                type="primary"
                style={{ marginRight: 8 }}
                onClick={startUse}
              >
                开始使用
              </Button>
              <Button onClick={routeToDoc}>阅读文档</Button>
            </div>
          </div>
          <div className={styles.carousel}>
            <Carousel autoplay={true}>
              <div>
                <div className={styles.contentStyle}>
                  <p className={styles.carouselTitle}>
                    全场景浏览器解决方案，云端存储，异步渲染，性能更高
                  </p>
                  <div>
                    <Image
                      width={500}
                      height={250}
                      preview={false}
                      src={require('../image/首页走马灯1.png')}
                      style={{ position: 'relative', zIndex: 1 }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.contentStyle}>
                  <p className={styles.carouselTitle}>
                    医嘱打印续打，补打，套打...各种特殊打印，一步搞定
                  </p>
                  <div>
                    <Image
                      width={500}
                      height={250}
                      preview={false}
                      src={require('../image/首页走马灯2.png')}
                      style={{ position: 'relative', zIndex: 1 }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.contentStyle}>
                  <p className={styles.carouselTitle}>
                    全部自研，专业团队7*24小时在线支持
                  </p>
                  <div>
                    <Image
                      width={500}
                      height={250}
                      preview={false}
                      src={require('../image/首页走马灯3.png')}
                      style={{ position: 'relative', zIndex: 1 }}
                    />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className={styles.componentContent2}>
        <div style={{ textAlign: 'center' }}>
          <div className={styles.content1}>
            <div
              style={{
                fontSize: 36,
                marginBottom: 24,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              核心功能
            </div>
            <div className={styles.partList}>
              <div className={styles.part}>
                <div>
                  <Image
                    width={220}
                    height={300}
                    src={require('../image/核心功能1.png')}
                  />
                </div>
                <div className={styles.description}>
                  业务数据绑定模版，数据驱动页面循环渲染
                </div>
              </div>
              <div className={styles.part}>
                <div>
                  <Image
                    width={220}
                    height={300}
                    src={require('../image/核心功能2.png')}
                  />
                </div>
                <div className={styles.description}>
                  医嘱打印续打，补打，套打等打印模式完全解决方案，专属区域标记，预览效果更友好
                </div>
              </div>
              <div className={styles.part}>
                <div>
                  <Image
                    width={220}
                    height={300}
                    src={require('../image/核心功能3.png')}
                  />
                </div>
                <div className={styles.description}>
                  模版可编程，支持运行态动态调整打印效果
                </div>
              </div>
              <div className={styles.part}>
                <div>
                  <Image
                    width={220}
                    height={300}
                    src={require('../image/核心功能4.png')}
                  />
                </div>
                <div className={styles.description}>
                  大数据量打印，异步渲染，进度实时掌控
                </div>
              </div>
            </div>
          </div>
          <div className={styles.getMore} onClick={getMore}>
            {'更多功能>>'}
          </div>
        </div>
      </div>
      <div className={styles.componentContent3}>
        <div style={{ textAlign: 'center' }}>
          <div className={styles.content1}>
            <div
              style={{
                fontSize: 36,
                marginBottom: 24,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              案例
            </div>
            <div className={styles.partList}>
              <div className={styles.part}>
                <div>
                  <Image
                    width={220}
                    height={300}
                    preview={false}
                    onClick={() => caseClick(1)}
                    style={{ cursor: 'pointer' }}
                    src={require('../image/首页案例3.jpg')}
                  />
                </div>
                <div className={styles.description}>列板循环渲染</div>
              </div>
              <div className={styles.part}>
                <div>
                  <Image
                    width={220}
                    height={300}
                    preview={false}
                    onClick={() => caseClick(2)}
                    style={{ cursor: 'pointer' }}
                    src={require('../image/首页案例2.jpg')}
                  />
                </div>
                <div className={styles.description}>补打，续打标记</div>
              </div>
              <div className={styles.part}>
                <div>
                  <Image
                    width={220}
                    height={300}
                    preview={false}
                    onClick={() => caseClick(3)}
                    style={{ cursor: 'pointer' }}
                    src={require('../image/首页案例1.png')}
                  />
                </div>
                <div className={styles.description}>多页模版分组打印</div>
              </div>
            </div>
          </div>
          <div className={styles.getMore} onClick={getMore}>
            {'更多案例>>'}
          </div>
        </div>
      </div>
    </div>
  );
}
