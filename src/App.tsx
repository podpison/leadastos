import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/commonComponents/navigation/Navigation';
import { MainPage } from './components/pages/main/Main';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import c from "./App.module.scss";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AboutPage } from './components/pages/about/AboutPage';
import { WorksPage } from './components/pages/works/WorksPage';
import { PricesPage } from './components/pages/prices/PricesPage';
import { ContactsPage } from './components/pages/contacts/ContactsPage';
import { ForClientsPage } from './components/pages/forClients/ForClientsPage';
import { ThemeContext } from './static/hooks/useTheme';
import { useState, useEffect } from 'react';

function App() {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(!localStorage.theme ? 'light' : localStorage.theme);

  useEffect(() => {
    localStorage.theme = currentTheme;
  }, [currentTheme]); 

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.className = currentTheme === 'light' ? 'rootLight' : 'rootDark';
    }
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: setCurrentTheme }}>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <HashRouter>
            <div className={c.app}>
              <Navigation />
              <main className={c.main}>
                <Routes>
                  <Route path='*' element={<MainPage />} />
                  <Route path='/about' element={<AboutPage />} />
                  <Route path='/works' element={<WorksPage />} />
                  <Route path='/prices' element={<PricesPage />} />
                  <Route path='/prices/chooserMode' element={<PricesPage />} />  
                  <Route path='/contacts' element={<ContactsPage />} />
                  <Route path='/forClients' element={<ForClientsPage />} />
                </Routes>
              </main>
            </div>
          </HashRouter>
        </Provider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
};

export default App;
