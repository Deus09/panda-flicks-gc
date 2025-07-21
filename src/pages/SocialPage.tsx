import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';

const SocialPage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <div className="content-container">
          <h1>Sosyal</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SocialPage;