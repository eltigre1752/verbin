import styles from "./Listener.module.scss";
import ReactAudioPlayer from "react-audio-player";
import Image from "next/image";

const Listener = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>This is the song name</h1>
        <div className={styles.songContainer}>
          <div className={styles.songImage}>
            <Image src="/assets/image1.jpg" width="250" height="250" />
            <div className={styles.songInfo}>
              <h1>This is the song name !!</h1>
              <h4>This is the artist name</h4>
            </div>
          </div>
          <ReactAudioPlayer
            id={styles.Player}
            src="http://localhost:3001/audio/1"
            controls
          />
        </div>
        <div className={styles.userInfo}>
          <Image
            id={styles.UserImage}
            src="/assets/image1.jpg"
            width="60"
            height="60"
          />
          <h3>The artist name ?</h3>
        </div>
        <p id={styles.UserPost}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <div className={styles.userComments}>
          <form>
            <div>
              <Image
                id={styles.UserImage}
                src="/assets/image1.jpg"
                width="60"
                height="60"
              />
              <textarea type="text" name="comment" rows="4" cols="84" />
            </div>
            <input type="submit" value="Comment" />
          </form>
          <div className={styles.commentSection}>
            {/* comment 1 */}
            <div>
              <Image
                id={styles.UserImage}
                src="/assets/VERBIN.png"
                width="60"
                height="60"
              />
              <h4>this is a name</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            {/* comment 2 */}
            <div>
              <Image
                id={styles.UserImage}
                src="/assets/VERBIN.png"
                width="60"
                height="60"
              />
              <h4>this is a name</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listener;
