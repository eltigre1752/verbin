import styles from './authentication.module.scss';
import { useState } from 'react';

const SigninForm = ({ changeMode }) => {
  return (
    <form className={styles.signinGrid}>
      <h2>SIGN IN</h2>
      <input type='text' placeholder='email ...' />
      <input type='password' placeholder='password ...' />
      <input type='submit' value='Sign in' />
      <p>
        Don't have an account?
        <button onClick={() => changeMode(m => !m)}>Sign up now!</button>
      </p>
    </form>
  );
};
const SignupForm = ({ changeMode }) => {
  return (
    <form className={styles.signupGrid}>
      <h2>SIGN UP</h2>
      <input type='text' placeholder='username ...' />
      <input type='text' placeholder='email ...' />
      <input type='password' placeholder='password ...' />
      <input type='password' placeholder='confirm password ...' />
      <input type='submit' value='Sign up' />
      <p>
        Already have an account?
        <button onClick={() => changeMode(m => !m)}>Sign in now!</button>
      </p>
    </form>
  );
};

const Authentication = () => {
  const [mode, setMode] = useState(false);
  return (
    <div id={styles.Login}>
      <div className={styles.container}>
        <div>
          <h1>VERBIN</h1>
          <p id={styles.BigFontSize}>
            Verbin is an online music streaming service, which promotes interaction and building
            connections between listeners and artists
          </p>
        </div>
        {mode ? <SignupForm changeMode={setMode} /> : <SigninForm changeMode={setMode} />}
      </div>
    </div>
  );
};
export default Authentication;
