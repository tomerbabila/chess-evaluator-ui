import { Route, Routes } from 'react-router-dom';
import { Home, Layout, Analyze } from './pages';
import { ThemeProvider } from '@/components/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='analyze' element={<Analyze />} />
          {/* <Route path='game/:gameId' element={<GamePage />} />
        <Route path='my-games' element={<MyGamesPage />} />
        <Route path='users/:userId' element={<UserPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='settings' element={<SettingsPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
