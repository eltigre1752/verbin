import styles from './NavBar.module.scss';
import Image from 'next/image';
import { FaSearch, FaUser } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { AiFillSetting } from 'react-icons/ai';
import Link from 'next/link';

const SearchBar = () => {
  return (
    <form id={styles.SearchBar}>
      <button>
        <FaSearch />
      </button>
      <input type='text' />
    </form>
  );
};

const NavBar = () => {
  return (
    <div id={styles.NavBar}>
      <div id={styles.Brand}>
        <Link href='/'>
          <button>
            <Image src='/assets/VERBIN.png' width='48' height='40' />
            <span>Verbin</span>
          </button>
        </Link>
      </div>
      <SearchBar />
      <div id={styles.NavButtons}>
        <Link href='/authentication'>
          <button>
            <FaUser />
          </button>
        </Link>
        <button>
          <IoMdNotifications />
        </button>
        <button>
          <AiFillSetting />
        </button>
      </div>
    </div>
  );
};
export default NavBar;
