import styles from './authentication.module.scss';
import { useRouter } from 'next/router';
import { useCallback, useReducer, useState } from 'react';
import { SERVER } from '../_config';
import { mutate } from 'swr';

const SigninForm = ({ changeMode, changeHandler, values, submitHandler }) => {
  return (
    <form className={styles.signinGrid} onSubmit={submitHandler}>
      <h2>SIGN IN</h2>
      <input
        type='email'
        name='email'
        placeholder='email ...'
        onChange={changeHandler}
        value={values.email}
      />
      <input
        type='password'
        name='password'
        placeholder='password ...'
        onChange={changeHandler}
        value={values.password}
      />
      <input type='submit' value='Sign in' />
      <p>
        Don't have an account?
        <button onClick={() => changeMode(m => !m)}>Sign up now!</button>
      </p>
    </form>
  );
};

const SignupForm = ({ changeMode, changeHandler, values, submitHandler }) => {
  return (
    <form className={styles.signupGrid} onSubmit={submitHandler}>
      <h2>SIGN UP</h2>
      <input
        type='text'
        name='name'
        placeholder='username ...'
        onChange={changeHandler}
        value={values.name}
      />
      <input
        type='email'
        name='email'
        placeholder='email ...'
        onChange={changeHandler}
        value={values.email}
      />
      <input
        type='password'
        name='password'
        placeholder='password ...'
        onChange={changeHandler}
        value={values.password}
      />
      <input
        type='password'
        name='rePassword'
        placeholder='confirm password ...'
        onChange={changeHandler}
        value={values.rePassword}
      />
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
  const router = useRouter();
  const [formValues, setFormValues] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'email':
          return { ...state, email: action.value };
        case 'name':
          return { ...state, name: action.value };
        case 'password':
          return { ...state, password: action.value };
        case 'rePassword':
          return { ...state, rePassword: action.value };
        default:
          break;
      }
    },
    {
      email: '',
      name: '',
      password: '',
      rePassword: '',
    }
  );

  const handleFormChange = useCallback(e => {
    setFormValues({ type: e.target.name, value: e.target.value });
  }, []);

  const handleFormSubmit = useCallback(
    e => {
      e.preventDefault();

      let type = '';
      if (mode) type = 'signup';
      else type = 'signin';

      console.log(`${SERVER}/auth/${type}`);
      console.log(formValues);

      fetch(`${SERVER}/auth/${type}`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      }).then(res => {
        if (res.status === 200) {
          mutate('/auth');
          router.replace('/');
        }
      });
    },
    [router, formValues, mode, SERVER]
  );

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
        {mode ? (
          <SignupForm
            changeMode={setMode}
            values={formValues}
            changeHandler={handleFormChange}
            submitHandler={handleFormSubmit}
          />
        ) : (
          <SigninForm
            changeMode={setMode}
            values={formValues}
            changeHandler={handleFormChange}
            submitHandler={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
};
export default Authentication;
