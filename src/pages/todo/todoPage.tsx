import React from 'react';
import styles from './todo.module.scss';

export const TodoPage = () => {
  return (
    <div className={styles.todoPage}>
      <p>Имя пользователя</p>
      <button>Выйти</button>
    </div>
  );
};
