import styles from './SideBar.module.scss';
import { RiHeadphoneFill } from 'react-icons/ri';
import { GiFlamer } from 'react-icons/gi';
import { AiFillBook, AiFillHome } from 'react-icons/ai';
import Link from 'next/link';
import UploadForm from './UploadForm';
import { useRouter } from 'next/router';
import { useState } from 'react';

const SideBar = () => {
  const [openUpload, setOpenUpload] = useState(false);
  const router = useRouter();

  return (
    <>
      <UploadForm open={openUpload} closeForm={() => setOpenUpload(false)} />
      <div id={styles.SideBar}>
        <div id={styles.AddPostButton}>
          <button onClick={() => setOpenUpload(true)}>+ New post</button>
        </div>

        <hr />

        <div
          className={
            router.pathname === '/' ? `${styles.sideOption} ${styles.selected}` : styles.sideOption
          }
        >
          <Link href='/'>
            <button>
              <AiFillHome />
              <span>Home</span>
            </button>
          </Link>
        </div>
        <div className={styles.sideOption}>
          <button>
            <GiFlamer />
            <span>Hot</span>
          </button>
        </div>
        <div className={styles.sideOption}>
          <button>
            <RiHeadphoneFill />
            <span>Listen</span>
          </button>
        </div>
        <div className={styles.sideOption}>
          <button>
            <AiFillBook />
            <span>Saved</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
