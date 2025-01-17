import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import { INDEX_COMPONENT, ROUTES } from './config';

const AppRoutes = () => {
  const { langCode } = useSelector((state) => state.language);
  return (
    <Routes>
      <Route index element={<Navigate to={'/' + langCode} />}></Route>
      <Route path="/:lang" element={<App />}>
        <Route index element={<INDEX_COMPONENT />} />
        {Object.values(ROUTES).map((route) => {
          return Object.values(route.paths).map((path, key) => {
            return (
              <Route key={key} path={path} element={<route.Component />} />
            );
          });
        })}
      </Route>
    </Routes>
  );
};
export default AppRoutes;
