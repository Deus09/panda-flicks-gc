import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';

const ListsPage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <div className="content-container">
          <h1>Listeler</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ListsPage;