import { BurgerIcon, PlusIcon } from 'shared/ui/buttons';
import styles from './MainHeader.module.scss';
import { Link } from 'react-router-dom';
import { auth } from 'shared/api/config/firebase';

export const MainHeader = () => {
  const user = auth.currentUser?.email;

  return (
    <header className={styles.header}>
      <span className={styles.logo}>SimpleNotes</span>
      <div>{user}</div>
      <div className={styles.buttons}>
        <div className={styles.button}>
          <Link to="/note/1">
            <PlusIcon />
          </Link>
        </div>
        <div className={styles.button}>
          <BurgerIcon />
        </div>
      </div>
    </header>
  );
};
