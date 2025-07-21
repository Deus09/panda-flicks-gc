import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './MyLogPage.css';

const MyLogPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>İzlediklerim</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">İzlediklerim</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="MyLogPage" />
      </IonContent>
    </IonPage>
  );
};

export default MyLogPage;
