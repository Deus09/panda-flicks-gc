import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './MyLogPage.css';

const MyLogPage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <div className="content-container">
          <h1>İzlediklerim</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MyLogPage;