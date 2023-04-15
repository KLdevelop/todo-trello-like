import React from 'react';
import styles from './registration.module.scss';

export const RegistrationPage = () => {
  return (
    <div className={styles.registrationPage}>
      <input type="email" />
      <input type="text" />
      <input type="text" />
      <input type="password" />
      <input type="password" />
      <button>Зарегистрироваться</button>
      <button>Войти в аккаунт</button>
    </div>
  );
};
