import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './pages/commonComponents/navigation/Navigation';
import { MainPage } from './pages/main/Main';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import c from "./App.module.scss";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AboutPage } from './pages/about/AboutPage';
import { WorksPage } from './pages/works/WorksPage';
import { PricesPage } from './pages/prices/PricesPage';
import { ContactsPage } from './pages/contacts/ContactsPage';
import { ForClientsPage } from './pages/forClients/ForClientsPage';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <HashRouter basename={process.env.PUBLIC_URL} >
          <Navigation />
          <main className={c.main}>
            <Routes>
              <Route path='*' element={<MainPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/works' element={<WorksPage />} />
              <Route path='/prices' element={<PricesPage />} />
              <Route path='/contacts' element={<ContactsPage />} />
              <Route path='/forClients' element={<ForClientsPage />} />
            </Routes>
          </main>
        </HashRouter>
      </Provider>
    </StyledEngineProvider>
  );
};

export default App;
