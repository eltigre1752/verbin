import styles from './NavBar.module.scss';

const SearchBar = () => {
  return (
    <form>
      <input type='text' />
    </form>
  );
};

const NavBar = () => {
  return (
    <div id={styles.NavBar}>
      <div id={styles.Brand}>verbin</div>
      <div id={styles.NavButtons}>
        <button>home</button>
        <button>hot</button>
        <button>listen</button>
      </div>
      <div>
        <SearchBar />
      </div>
      <div id={styles.NavUserButton}>
        <button>User</button>
      </div>
    </div>
  );
};
export default NavBar;
