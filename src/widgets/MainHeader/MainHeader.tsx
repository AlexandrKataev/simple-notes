import { BurgerIcon, PlusIcon } from 'shared/ui/buttons';
import styles from './MainHeader.module.scss';
import { Link } from 'react-router-dom';

export const MainHeader = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>SimpleNotes</span>
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
