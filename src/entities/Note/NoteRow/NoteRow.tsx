import { FC } from 'react';
import clsx from 'clsx';

import styles from './NoteRow.module.scss';
import { CheckboxIcon } from 'shared/ui/buttons';

export interface INoteRow {
  title: string;
  type: 'list' | 'text';
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'black' | 'gray' | 'white';
}

export const NoteRow: FC<INoteRow> = ({ title, type, color }) => {
  return (
    <div className={clsx(styles.container, styles[color])}>
      <div>{title}</div>
      {type === 'list' && (
        <div className={styles.checkbox}>
          <CheckboxIcon />
        </div>
      )}
    </div>
  );
};
