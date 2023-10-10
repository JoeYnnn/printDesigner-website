import { List, Typography } from 'antd';
import styles from './index.less';
let log = [
  {
    label: '0.6.1',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-local:pango-print/pango-print-0.6.1.tgz',
  },
  {
    label: '0.6.0',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-local:pango-print/pango-print-0.6.0.tgz',
  },
  {
    label: '0.5.9-beta',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-local:pango-print/pango-print-0.5.9-beta.tgz',
  },
  {
    label: '0.5.8',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.8.tgz',
  },
  {
    label: '0.5.7',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.7.tgz',
  },
  {
    label: '0.5.6',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.6.tgz',
  },
  {
    label: '0.5.5',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.5.tgz',
  },
  {
    label: '0.5.4',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.4.tgz',
  },
  {
    label: '0.5.3',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.3.tgz',
  },
  {
    label: '0.5.2',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.2.tgz',
  },
  {
    label: '0.5.1',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.1.tgz',
  },
  {
    label: '0.5.0',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.5.0.tgz',
  },
  {
    label: '0.4.9',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.4.9.tgz',
  },
  {
    label: '0.4.8',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.4.8.tgz',
  },
  {
    label: '0.4.7',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.4.7.tgz',
  },
  {
    label: '0.4.6',
    link: 'http://172.16.9.57:8081/#browse/browse:npm-group:pango-print/pango-print-0.4.6.tgz',
  },
];

const index = () => {
  return (
    <div className={styles.sourcePage}>
      <div className={styles.content}>
        <List style={{ width: '100%' }}>
          {log.map((item, key) => {
            return (
              <List.Item key={key}>
                <Typography.Text
                  style={{
                    fontSize: 24,
                  }}
                >
                  <a href={item.link} download={item.label + '.tgz'}>
                    {item.link.slice(
                      item.link.indexOf('pango-print-'),
                      item.link.length - 4,
                    )}
                  </a>
                </Typography.Text>
              </List.Item>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default index;
