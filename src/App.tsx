import React from 'react';
import 'app.module.scss';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthPage, RegistrationPage, TodoPage } from 'src/pages';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  </Router>
);
