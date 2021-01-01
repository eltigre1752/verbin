import styles from '../authentication/Authentication.module.scss';
import { useState, useEffect } from 'react';

const SigninForm = ({changeMode}) =>{
    return(
        <form className={styles.signinGrid}>
            <h2>Đăng nhập</h2>
            <input type='text'placeholder='Tài khoản'/>
            <input type='password' placeholder='Mật khẩu'/>
            <button id={styles.SigninButton} type='submit'>Đăng nhập</button>
            <p id={styles.MediumFontSize}>Chưa có mật khẩu ?  <a id ={styles.SigninLink} href="#" onClick={() => changeMode(m => !m)} type='submit'>Đăng ký</a>
            </p>

        </form>
    )
}
const SignupForm =({changeMode}) =>{
    return (
        <form  className={styles.signupGrid}>
            <h2>Đăng ký</h2>
            <input type='text' placeholder='Họ và Tên'/>
            <input type='text' placeholder='Email'/>
            <input type='text' placeholder='Tài khoản mới'/>
            <input type='password' placeholder='Mật khẩu mới'/>
            <input type='password' placeholder='Nhập lại mật khẩu mới'/>
            <button type='submit' id={styles.SignupButton}>Đăng ký</button>
            <p id={styles.MediumFontSize}>Đã có tài khoản ?  <a id ={styles.SignupLink} href="#"  onClick={() => changeMode(m => !m)} type='submit'>Đăng nhập</a></p>
        </form>
    )
}

const MainPage = () =>{
    const [mode, setMode] = useState(false);

 
    return(
        <form>
            <div className={styles.container}>
                <div>
                    <h1>VERBIN</h1>
                    <p id={styles.BigFontSize}>
                        Verbin nền tảng âm nhạc trực tuyến giúp hỗ trợ kết nối người nghe và nghệ sĩ với nhau
                    </p>
                </div>
                {
                    mode ? 
                    <SignupForm changeMode={setMode}/>         
                    : <SigninForm changeMode={setMode} />
                }
            </div>
        </form>
    )
}

const Authentication = () =>{
    return (
        <div id={styles.Login}>
            <MainPage/> 
        </div>
    )
}
export default Authentication;