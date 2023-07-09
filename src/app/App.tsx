import { AuthPage } from 'pages';
import styles from './App.module.scss';
import { Routing } from './routing/Routing';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      setIsAuth(true);
      // ...
    } else {
      setIsAuth(false);
      // User is signed out
      // ...
    }
  });

  return (
    <div className={styles.app}>
      <div className={styles.container}>{isAuth ? <Routing /> : <AuthPage />}</div>
    </div>
  );
};
