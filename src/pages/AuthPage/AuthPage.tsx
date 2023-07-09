import { useState } from 'react';
import styles from './AuthPage.module.scss';

import { MainHeader } from 'widgets';
import { userApi } from 'shared/api/userApi';

export const AuthPage = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  return (
    <div>
      <MainHeader />
      <section className={styles.container}>
        <div className={styles.signIn}>
          <h2>Войти в аккаунт</h2>
          <input
            type="text"
            value={mail}
            onChange={(event) => setMail(event.target.value)}
            placeholder="Почта"
          />
          <input
            type="password"
            value={password}
            placeholder="Пароль"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={() => userApi.signIn(mail, password)}>Войти</button>
        </div>
        <div className={styles.signOut}>
          <h2>Создать аккаунт</h2>
          <button onClick={() => userApi.signUp(mail, password)}>Создать</button>
        </div>
      </section>
    </div>
  );
};
