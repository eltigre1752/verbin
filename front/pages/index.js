import Post from '../components/Post';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div id={styles.Page}>
      <div id={styles.ContentWrapper}>
        <div id={styles.Content}>
          {(() => {
            let temp = [];
            for (let i = 0; i < 10; i++) {
              temp.push(<Post key={i} />);
            }
            return temp;
          })()}
        </div>
      </div>
    </div>
  );
}
