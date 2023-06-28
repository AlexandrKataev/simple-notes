import { AuthPage } from 'pages';
import styles from './App.module.scss';
import { Routing } from './routing/Routing';

export const App = () => {
  const isAuth = false;

  return (
    <div className={styles.app}>
      <div className={styles.container}>{isAuth ? <Routing /> : <AuthPage />}</div>
    </div>
  );
};
