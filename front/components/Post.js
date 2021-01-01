import styles from './Post.module.scss';
import ReactAudioPlayer from 'react-audio-player';
import { AiFillHeart } from 'react-icons/ai';
import { FaCommentAlt } from 'react-icons/fa';
import { MdReportProblem } from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';

const ReportWindow = ({ openReport, setOpenReport }) => {
  return (
    <div
      className={(() => (openReport ? `${styles.report}` : `${styles.report} ${styles.hidden}`))()}
    >
      <div className={styles.flexContainer}>
        <div className={styles.row}>
          <form
            onSubmit={e => {
              e.preventDefault();
              setOpenReport(false);
            }}
          >
            <div>
              <input type='radio' value='1' name='reason' />
              <label>Sexual content</label>
            </div>
            <div>
              <input type='radio' value='2' name='reason' />
              <label>Violent content</label>
            </div>
            <div>
              <input type='radio' value='3' name='reason' />
              <label>Hateful or repulsive content</label>
            </div>
            <div>
              <input type='radio' value='4' name='reason' />
              <label>Promotes misinformation</label>
            </div>
            <div>
              <input type='radio' value='5' name='reason' />
              <label>Inappropriate language</label>
            </div>
            <hr />
            <div className={styles.submitReport}>
              <input type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const CommentSection = () => {
  return (
    <div id={styles.CommentSection} className={styles.flexContainer}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div />
        </div>
        <div className={styles.col}>Some_guy_on_the_Internet</div>
      </div>
      <div className={styles.row}>A certified bobber</div>
    </div>
  );
};

const Post = () => {
  const [openComments, setOpenComments] = useState(false);
  const [like, setLike] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const commentRef = useRef(undefined);

  useEffect(() => {
    if (!commentRef) return;

    if (!openComments) {
      commentRef.current.className = `${styles.comments} ${styles.row} ${styles.hidden}`;
    } else {
      commentRef.current.className = `${styles.comments} ${styles.row}`;
    }
  }, [openComments, commentRef]);

  return (
    <>
      <div className={`${styles.post} ${styles.flexContainer}`}>
        <div className={styles.row}>
          <div className={`${styles.profileImg} ${styles.col}`}>
            <div />
          </div>
          <div className={`${styles.username} ${styles.col}`}>Isaac</div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.postBody} ${styles.col}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.music} ${styles.col}`}>
            <ReactAudioPlayer
              src='http://localhost:3001/audio/1'
              controls
              crossOrigin='anonymous'
            />
          </div>
        </div>
        <div className={`${styles.row} ${styles.interactButtons}`}>
          <div className={styles.col}>
            <button
              onClick={() => setLike(l => !l)}
              className={(() => (like ? `${styles.clicked}` : ''))()}
            >
              <AiFillHeart />
            </button>
          </div>
          <div className={styles.col}>
            <button
              onClick={() => setOpenComments(c => !c)}
              className={(() => (openComments ? `${styles.clicked}` : ''))()}
            >
              <FaCommentAlt />
            </button>
          </div>
          <div className={styles.col}>
            <button onClick={() => setOpenReport(true)}>
              <MdReportProblem />
            </button>
          </div>
        </div>
        <div ref={commentRef} className={`${styles.comments} ${styles.row} ${styles.hidden}`}>
          <CommentSection />
        </div>
      </div>
      <ReportWindow openReport={openReport} setOpenReport={setOpenReport} />
    </>
  );
};

export default Post;
