import styles from './NavBar.module.scss';
import Image from 'next/image';
import { FaSearch, FaUser } from 'react-icons/fa';
import { IoMdNotifications } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";

const SearchBar = () => {
  return (
    <form id={styles.SearchBar}>
      <button><FaSearch/></button>
      <input type='text' />
    </form>
  );
};

const NavBar = () => {
  return (
    <div id={styles.NavBar}>
      <div id={styles.Brand}><Image src='/assets/VERBIN.png' width={100}
        height={35} /></div>
        <SearchBar />
      <div id={styles.NavButtons}>
        <button>
          <FaUser/>
        </button>
        <button>
          <IoMdNotifications/>
        </button>
        <button>
          <AiFillSetting/>
        </button>
      </div>
    </div>
  );
};
export default NavBar;
