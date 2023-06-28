import { MainHeader } from 'widgets';
import styles from './HomePage.module.scss';
import { INoteRow, NoteRow } from 'entities/index';

const array: INoteRow[] = [
  { title: 'ABC', type: 'text', color: 'orange' },
  { title: 'ABC', type: 'text', color: 'orange' },
  { title: '123', type: 'list', color: 'blue' },
  { title: 'ToDo List', type: 'list', color: 'gray' },
  { title: 'XYZ', type: 'text', color: 'red' },
];

export const HomePage = () => {
  return (
    <>
      <MainHeader />
      {array.map((el, i) => (
        <NoteRow {...el} key={i} />
      ))}
    </>
  );
};
