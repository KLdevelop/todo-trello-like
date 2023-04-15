import React from 'react';
import styles from './auth.module.scss';

export const AuthPage = () => {
  return (
    <div className={styles.authPage}>
      <input type="text" />
      <input type="password" />
      <button>Войти</button>
      <button>Создать аккаунт</button>
    </div>
  );
};
