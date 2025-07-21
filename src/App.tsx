import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { book, search, people, list, person } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';

// Yeniden adlandırdığımız sayfaları import ediyoruz
import MyLogPage from './pages/MyLogPage';
import DiscoverPage from './pages/DiscoverPage';
import ProfilePage from './pages/ProfilePage';

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

// İleride oluşturacağımız sayfalar için boş iskeletler
const MovieDetailPage: React.FC = () => <IonApp><div>Film Detay</div></IonApp>;
const SettingsPage: React.FC = () => <IonApp><div>Ayarlar</div></IonApp>;
const PublicProfilePage: React.FC = () => <IonApp><div>Profil</div></IonApp>;


setupIonicReact();

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/* Sekme Yolları */}
            <Route exact path="/my-log" component={MyLogPage} />
            <Route exact path="/discover" component={DiscoverPage} />
            <Route exact path="/profile" component={ProfilePage} />

            {/* Varsayılan olarak Keşfet sayfasına yönlendir */}
            <Route exact path="/">
              <Redirect to="/discover" />
            </Route>

            {/* Sekme Dışı Sayfalar */}
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