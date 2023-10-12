import { Button, Carousel } from 'antd';
import styles from './index.less';
import { history } from 'umi';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '250px',
  color: '#fff',
  lineHeight: '250px',
  textAlign: 'center',
  background: '#364d79',
};

export default function HomePage(props: any) {
  const routeToDoc = () => {
    history.push('/docPage');
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
              <Button type="primary" style={{ marginRight: 8 }}>
                开始使用
              </Button>
              <Button onClick={routeToDoc}>阅读文档</Button>
            </div>
          </div>
          <div className={styles.carousel}>
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className={styles.componentContent2}>
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
            <div className={styles.part}>1</div>
            <div className={styles.part}>2</div>
            <div className={styles.part}>3</div>
            <div className={styles.part}>4</div>
          </div>
        </div>
      </div>
      <div className={styles.componentContent3}>
        <div className={styles.content}>
          <div className={styles.content2}>
            <div
              style={{
                fontSize: 36,
                marginBottom: 24,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              用例
            </div>
            <div className={styles.partList}>
              <div className={styles.part}>1</div>
              <div className={styles.part}>2</div>
              <div className={styles.part}>3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
