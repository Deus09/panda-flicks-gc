import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <div className="content-container">
          <h1>Profil</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;