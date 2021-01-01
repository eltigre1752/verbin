import styles from './FollowBar.module.scss';
import { RiChatFollowUpFill } from 'react-icons/ri';

const FollowBar = () => {
  return (
    <div id={styles.Follow}>
      <span className={styles.header}>
        <span>People you followed</span>
        <RiChatFollowUpFill />
      </span>
      <div id={styles.FollowedList}>Empty</div>
    </div>
  );
};

export default FollowBar;
