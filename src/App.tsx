import { Redirect, Route } from 'react-router-dom';
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

import MyLogPage from './pages/MyLogPage';
import DiscoverPage from './pages/DiscoverPage';
import ProfilePage from './pages/ProfilePage';
import SocialPage from './pages/SocialPage';
import ListsPage from './pages/ListsPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/global.css'; // <-- YENİ MODÜLER STİL DOSYAMIZ


const MovieDetailPage: React.FC = () => <IonApp><div>Film Detay</div></IonApp>;
const SettingsPage: React.FC = () => <IonApp><div>Ayarlar</div></IonApp>;
const PublicProfilePage: React.FC = () => <IonApp><div>Profil</div></IonApp>;

setupIonicReact();

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonApp>
      <IonReactRouter>
        {/* BUTONU, HER ŞEYİN DIŞINA, EN ÜSTE KOYUYORUZ */}
        <IonFab vertical="top" horizontal="end" slot="fixed" style={{ top: '54.96px', right: '1rem', transform: 'translateY(-50%)', zIndex: 9999 }}>
          <IonFabButton size="small">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/my-log" component={MyLogPage} />
            <Route exact path="/discover" component={DiscoverPage} />
            <Route exact path="/social" component={SocialPage} />
            <Route exact path="/lists" component={ListsPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/">
              <Redirect to="/discover" />
            </Route>
            <Route path="/movie/:id" component={MovieDetailPage} />
            <Route path="/settings" component={SettingsPage} />
            <Route path="/profile/:username" component={PublicProfilePage} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
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
      </IonReactRouter>
    </IonApp>
  );
};

export default App;