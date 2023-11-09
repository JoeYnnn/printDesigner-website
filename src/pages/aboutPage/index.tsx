import { List, Typography } from 'antd';
import styles from './index.less';

const index = () => {
  let list = [
    {
      name: '刘晓勇',
      email: 'lxy11@winning.com.cn',
      type: '运行态问题',
    },
    {
      name: '王鹏',
      email: 'wang_peng@winning.com.cn',
      type: '项目对接相关',
    },
    {
      name: '乔宇宁',
      email: 'q_yn@winning.com.cn',
      type: '设计态使用',
    },
  ];
  return (
    <div className={styles.sourcePage}>
      <div className={styles.content}>
        <div className={styles.product}>
          <div className={styles.title}>工具介绍</div>
          <div className={styles.description}>
            <p>
              WXP打印设计器是WXP研发平台部研发的web浏览器端的打印组件，
              功能丰富，支持常见的控件。
            </p>
            <p> 如：线条，文本框，复选框，图片(条形码)，表格，交叉表等。</p>
            <p>目前已在住院临床业务，护理业务，药品业务等业务部门上线。</p>
            <p>
              解决了批量打印可能存在的打印性能问题，实现了高效打印，
              并在临床实践中得到了验证。
            </p>
            <p>可为现阶段fast report组件的有效平替。</p>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.title}>联系人员</div>
          <div className={styles.emailBox}>
            {list.map((item, key) => {
              return (
                <p key={key} className={styles.email}>
                  {item.type}， 联系方式:
                  <span style={{ color: '#3d86ef', cursor: 'pointer' }}>
                    {item.email}
                  </span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
