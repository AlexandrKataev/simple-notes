import { useState } from 'react';
import styles from './AuthPage.module.scss';

export const AuthPage = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <h1>Пожалуйста, авторизуйтесь:</h1>
      <input type="text" value={mail} onChange={(event) => setMail(event.target.value)} />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
    </div>
  );
};
