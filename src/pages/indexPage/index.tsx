import { Button, Carousel, Image } from 'antd';
import styles from './index.less';
import { history } from 'umi';
import { useState } from 'react';

export default function HomePage(props: any) {
  const [currentCase, setCurrentCase] = useState(1);
  const routeToDoc = () => {
    history.push('/docPage');
  };

  const getMore = () => {
    history.push('/casePage');
  };

  const startUse = () => {
    localStorage.clear();
    sessionStorage.clear();
    clearAllCookie();

    const a = document.createElement('a');
    a.href =
      'http://wxp.cdp.iwincloud.com:8091/printDesigner/front?soid=10&mode=local';
    a.target = '_blank';
    a.click();
  };

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

  const caseClick = (key: any) => {
    console.log(key);
    setCurrentCase(key);
    // if (key == 1) {
    //   history.push('/casePage?key=3-3');
    // } else if (key == 2) {
    //   history.push('/casePage?key=9-2');
    // } else if (key == 3) {
    //   history.push('/casePage?key=8');
    // }
  };

  const caseHistoryClick = (key: any) => {
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
            <div
              style={{
                fontSize: 48,
                marginBottom: 6,
                fontWeight: 'bold',
                fontFamily: 'PingFangSC-Medium, PingFang SC',
              }}
            >
              全场景浏览器打印解决方案
            </div>
            <div
              style={{
                fontSize: 18,
                color: 'rgba(0,0,0, 0.75)',
                marginBottom: 26,
              }}
            >
              云端存储 异步渲染 性能更高
            </div>
            <div>
              <Button
                type="primary"
                style={{ marginRight: 8 }}
                onClick={startUse}
              >
                开始使用
              </Button>
              {/* <Button onClick={routeToDoc}>阅读文档</Button> */}
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
        <div style={{ textAlign: 'center', height: 467 }}>
          <div className={styles.content1}>
            <div
              style={{
                fontSize: 28,
                margin: '56px 0 45px 0',
                textAlign: 'center',
              }}
            >
              核心功能
            </div>
            <div className={styles.partList}>
              <div className={styles.part}>
                <div>
                  <Image
                    width={120}
                    height={120}
                    src={require('../image/首页核心功能1.png')}
                    preview={false}
                  />
                </div>
                <div className={styles.title}>循环渲染</div>
                <div className={styles.description}>
                  业务数据绑定模版，数据驱动页面循环渲染
                </div>
              </div>
              <div className={styles.part}>
                <div>
                  <Image
                    width={120}
                    height={120}
                    src={require('../image/首页核心功能3.png')}
                    preview={false}
                  />
                </div>
                <div className={styles.title}>医嘱打印</div>
                <div className={styles.description}>
                  续打，补打，套打等打印模式完全解决方案，专属区域标记，预览效果更友好
                </div>
              </div>
              <div className={styles.part}>
                <div>
                  <Image
                    width={120}
                    height={120}
                    src={require('../image/首页核心功能4.png')}
                    preview={false}
                  />
                </div>
                <div className={styles.title}>脚本编程</div>
                <div className={styles.description}>
                  模版可编程，支持运行态动态调整打印效果
                </div>
              </div>
              <div className={styles.part}>
                <div>
                  <Image
                    width={120}
                    height={120}
                    src={require('../image/首页核心功能2.png')}
                    preview={false}
                  />
                </div>
                <div className={styles.title}>异步渲染</div>
                <div className={styles.description}>
                  大数据量打印，异步渲染，进度实时掌控
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles.getMore} onClick={routeToDoc}>
            {'更多功能>>'}
          </div> */}
        </div>
      </div>
      <div className={styles.componentContent3}>
        <div style={{ textAlign: 'center' }}>
          <div className={styles.content1} style={{}}>
            <div
              style={{
                fontSize: 28,
                margin: '56px 0 45px 0',
                textAlign: 'center',
              }}
            >
              案例
            </div>
            <div className={styles.partList1}>
              <div className={styles.menu}>
                <div
                  className={`${
                    currentCase == 1
                      ? `${styles.menuList} ${styles.hover}`
                      : styles.menuList
                  }`}
                  onClick={() => caseClick(1)}
                >
                  列板循环渲染
                </div>
                <div
                  className={`${
                    currentCase == 2
                      ? `${styles.menuList} ${styles.hover}`
                      : styles.menuList
                  }`}
                  onClick={() => caseClick(2)}
                >
                  补打/续打标记
                </div>
                <div
                  className={`${
                    currentCase == 3
                      ? `${styles.menuList} ${styles.hover}`
                      : styles.menuList
                  }`}
                  onClick={() => caseClick(3)}
                >
                  多页模版分组打印
                </div>
              </div>
              {currentCase == 1 ? (
                <div className={styles.menuContent}>
                  <div className={styles.leftPic}>
                    <div>
                      <Image
                        width={600}
                        height={500}
                        src={require('../image/应用场景1.png')}
                        preview={false}
                      />
                    </div>
                  </div>
                  <div className={styles.rightDesc}>
                    <div className={styles.descBox}>
                      <div>列板循环场景</div>
                      <div>
                        对于需要纵向循环渲染打印的场景，wxp打印解决方案提供了列板解决方案，当纸张空间不够时，自动触发换页，且表头可设置是否每页打印或后续页不展示
                      </div>
                    </div>
                    <div className={styles.descBox1}>
                      <div className={styles.boxTitle}>能够提供</div>
                      <div style={{ marginBottom: 16 }}>
                        <div className={styles.descCont}>
                          <div style={{ marginBottom: 6 }}>
                            <Image
                              width={16}
                              height={13}
                              src={require('../image/首页应用场景icon.png')}
                              preview={false}
                            />
                          </div>
                          <div className={styles.icontext}>纵向循环</div>
                        </div>
                        <div className={styles.descDs}>
                          按绑定的列板数据纵向渲染，循环展示
                        </div>
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <div className={styles.descCont}>
                          <div style={{ marginBottom: 6 }}>
                            <Image
                              width={16}
                              height={13}
                              src={require('../image/首页应用场景icon.png')}
                              preview={false}
                            />
                          </div>
                          <div className={styles.icontext}>临界跨页</div>
                        </div>
                        <div className={styles.descDs}>
                          列板数据渲染到达页边距时，触发换页渲染
                        </div>
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <div className={styles.descCont}>
                          <div style={{ marginBottom: 6 }}>
                            <Image
                              width={16}
                              height={13}
                              src={require('../image/首页应用场景icon.png')}
                              preview={false}
                            />
                          </div>
                          <div className={styles.icontext}>表头每页打印</div>
                        </div>
                        <div className={styles.descDs}>
                          可设置临界跨页时，固定表头是否每页打印，或者只第一页展示
                        </div>
                      </div>
                    </div>
                    <div className={styles.buttonBox}>
                      <Button
                        className={styles.button}
                        onClick={() => caseHistoryClick(1)}
                      >
                        查看详情
                      </Button>
                    </div>
                  </div>
                </div>
              ) : currentCase == 2 ? (
                <div className={styles.menuContent}>
                  <div className={styles.menuContent}>
                    <div className={styles.leftPic}>
                      <div>
                        <Image
                          width={600}
                          height={500}
                          src={require('../image/应用场景3.png')}
                          preview={false}
                        />
                      </div>
                    </div>
                    <div className={styles.rightDesc}>
                      <div className={styles.descBox}>
                        <div>医嘱打印场景</div>
                        <div>
                          对于需要重复插入纸张进行多次续打或者补打的场景(医嘱打印)，wxp打印解决方案提供了续打标识，补打标识的展示，实际打印时只打印续打部分，或者补打部分，套打内容部分等(需借助混合框架/程序托盘配合实现)
                        </div>
                      </div>
                      <div className={styles.descBox1}>
                        <div className={styles.boxTitle}>能够提供</div>
                        <div style={{ marginBottom: 16 }}>
                          <div className={styles.descCont}>
                            <div style={{ marginBottom: 6 }}>
                              <Image
                                width={16}
                                height={13}
                                src={require('../image/首页应用场景icon.png')}
                                preview={false}
                              />
                            </div>
                            <div className={styles.icontext}>续打标识</div>
                          </div>
                          <div className={styles.descDs}>
                            上次打印后，新增打印内容时，需整体续打的部分，依据业务数据标识，用红框+遮罩展示续打内容
                          </div>
                        </div>
                        <div style={{ marginBottom: 16 }}>
                          <div className={styles.descCont}>
                            <div style={{ marginBottom: 6 }}>
                              <Image
                                width={16}
                                height={13}
                                src={require('../image/首页应用场景icon.png')}
                                preview={false}
                              />
                            </div>
                            <div className={styles.icontext}>补打标识</div>
                          </div>
                          <div className={styles.descDs}>
                            上次打印后，新增打印内容时，需填补的签名或者某项内容，可以使用业务数据标识指明，用蓝框+遮罩展示补打内容
                          </div>
                        </div>
                      </div>
                      <div className={styles.buttonBox}>
                        <Button
                          className={styles.button}
                          onClick={() => caseHistoryClick(2)}
                        >
                          查看详情
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.menuContent}>
                  <div className={styles.menuContent}>
                    <div className={styles.leftPic}>
                      <div>
                        <Image
                          width={600}
                          height={500}
                          src={require('../image/应用场景2.png')}
                          preview={false}
                        />
                      </div>
                    </div>
                    <div className={styles.rightDesc}>
                      <div className={styles.descBox}>
                        <div>多页模版分组跟随打印</div>
                        <div>
                          实际中需要按某项分组，渲染汇总数据，后接续分组明细数据的情况，wxp打印解决方案提供了多页模版分组跟随打印能力
                        </div>
                      </div>
                      <div className={styles.descBox1}>
                        <div className={styles.boxTitle}>能够提供</div>
                        <div style={{ marginBottom: 16 }}>
                          <div className={styles.descCont}>
                            <div style={{ marginBottom: 6 }}>
                              <Image
                                width={16}
                                height={13}
                                src={require('../image/首页应用场景icon.png')}
                                preview={false}
                              />
                            </div>
                            <div className={styles.icontext}>
                              单个模版设置多页
                            </div>
                          </div>
                          <div className={styles.descDs}>
                            可新增页面为模版添加多页
                          </div>
                        </div>
                        <div style={{ marginBottom: 16 }}>
                          <div className={styles.descCont}>
                            <div style={{ marginBottom: 6 }}>
                              <Image
                                width={16}
                                height={13}
                                src={require('../image/首页应用场景icon.png')}
                                preview={false}
                              />
                            </div>
                            <div className={styles.icontext}>
                              将模版设置为多页模版跟随
                            </div>
                          </div>
                          <div className={styles.descDs}>
                            可在模版上右键弹出属性框中，设置多页模版跟随
                          </div>
                        </div>
                        <div style={{ marginBottom: 16 }}>
                          <div className={styles.descCont}>
                            <div style={{ marginBottom: 6 }}>
                              <Image
                                width={16}
                                height={13}
                                src={require('../image/首页应用场景icon.png')}
                                preview={false}
                              />
                            </div>
                            <div className={styles.icontext}>
                              设置模版跟随汇总行板
                            </div>
                          </div>
                          <div className={styles.descDs}>
                            在模版右键弹出的属性框中，设置跟随行板即可实现此种打印效果
                          </div>
                        </div>
                      </div>
                      <div className={styles.buttonBox}>
                        <Button
                          className={styles.button}
                          onClick={() => caseHistoryClick(3)}
                        >
                          查看详情
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <div className={styles.getMore} onClick={getMore}>
            {'更多案例>>'}
          </div> */}
        </div>
      </div>
    </div>
  );
}
