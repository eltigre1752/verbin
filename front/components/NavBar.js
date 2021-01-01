import styles from './NavBar.module.scss';

const SearchBar = () => {
  return (
    <form>
      <input type='text' placeholder='lkajsdlk' />
    </form>
  );
};

const NavBar = () => {
  return (
    <div id={styles.NavBar}>
      <div id={styles.Brand}>verbin</div>
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
