import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './DiscoverPage.css';

const DiscoverPage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      {/* fullscreen özelliğini kaldırdık. Katman sorunlarının ana kaynağı buydu. */}
      <IonContent>
        <div className="content-container">
          <h1>Keşfet</h1>
          <p>Burası filmleri ve dizileri keşfedeceğimiz alan.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DiscoverPage;