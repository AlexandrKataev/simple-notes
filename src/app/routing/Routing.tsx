import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage, AuthPage, NotePage, UserPage } from 'pages/index';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/note/:noteId" element={<NotePage />} />
      <Route path="/user/:userId" element={<UserPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
