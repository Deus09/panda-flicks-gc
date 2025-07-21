import { Redirect, Route } from 'react-router-dom';
import React, { useState } from 'react';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonFab,
  IonFabButton
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useTranslation } from 'react-i18next';
import { book, search, person, add, people, list } from 'ionicons/icons';

// Sayfalarımız
import MyLogPage from './pages/MyLogPage';
import DiscoverPage from './pages/DiscoverPage';
import ProfilePage from './pages/ProfilePage';
import SocialPage from './pages/SocialPage';
import ListsPage from './pages/ListsPage';

// Yeni Component'imiz
import AddMovieModal from './components/AddMovieModal';

/* CSS Dosyalarımız */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';
import './theme/global.css';

// Diğer Sayfa Componentleri...
const MovieDetailPage: React.FC = () => <IonApp><div>Film Detay</div></IonApp>;
// ...

setupIonicReact();

const App: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openAddMovieModal = () => setIsModalOpen(true);
  const closeAddMovieModal = () => setIsModalOpen(false);

  return (
    <IonApp>
      <IonReactRouter>
        <IonFab vertical="top" horizontal="end" slot="fixed" style={{ top: '56px', right: '1rem', transform: 'translateY(-50%)', zIndex: 9999 }}>
          <IonFabButton size="small" onClick={openAddMovieModal}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        
        <IonTabs>
          <IonRouterOutlet>
            {/* ... Route'ların burada ... */}
            <Route exact path="/my-log" component={MyLogPage} />
            <Route exact path="/discover" component={DiscoverPage} />
            <Route exact path="/social" component={SocialPage} />
            <Route exact path="/lists" component={ListsPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/">
              <Redirect to="/discover" />
            </Route>
            <Route path="/movie/:id" component={MovieDetailPage} />
          </IonRouterOutlet>
          
          <IonTabBar slot="bottom">
            {/* ... Tab Butonların burada ... */}
            <IonTabButton tab="my-log" href="/my-log">
              <IonIcon aria-hidden="true" icon={book} />
              <IonLabel>{t('tabs.myLog')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="discover" href="/discover">
              <IonIcon aria-hidden="true" icon={search} />
              <IonLabel>{t('tabs.discover')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="social" href="/social">
              <IonIcon aria-hidden="true" icon={people} />
              <IonLabel>{t('tabs.social')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="lists" href="/lists">
              <IonIcon aria-hidden="true" icon={list} />
              <IonLabel>{t('tabs.lists')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon aria-hidden="true" icon={person} />
              <IonLabel>{t('tabs.profile')}</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>

        {/* Artık tüm modal mantığı bu tek satırda */}
        <AddMovieModal isOpen={isModalOpen} onDidDismiss={closeAddMovieModal} />

      </IonReactRouter>
    </IonApp>
  );
};

export default App;