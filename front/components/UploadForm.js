import styles from './UploadForm.module.scss';

const UploadForm = ({ closeForm, open }) => {
  const submitHandler = e => {
    e.preventDefault();
    closeForm();
  };

  return (
    <div id={styles.UploadForm} className={open ? '' : styles.hidden}>
      <form onSubmit={submitHandler}>
        <div id={styles.Body}>
          <textarea type='text' name='body' placeholder='What do you want to say?' />
        </div>
        <div id={styles.PostOption}>
          <input type='file' />
        </div>
        <div id={styles.Submit}>
          <input type='submit' value='Post' />
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
