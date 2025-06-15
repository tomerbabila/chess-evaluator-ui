import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Layout } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path='analyze' element={<NewAnalysisPage />} />
        <Route path='game/:gameId' element={<GamePage />} />
        <Route path='my-games' element={<MyGamesPage />} />
        <Route path='users/:userId' element={<UserPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='settings' element={<SettingsPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
