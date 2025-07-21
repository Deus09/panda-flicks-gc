import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import './DiscoverPage.css';

const DiscoverPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PandaFlicks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="content-container" style={{paddingTop: '16px'}}>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{t('tabs.discover')}</IonTitle>
            </IonToolbar>
          </IonHeader>

          <h1>UI/UX Kuralları Testi</h1>

          <p>
            Bu arayüz, variables.css dosyasında tanımlanan özel tema, renkler,
            boşluklar ve yazı tiplerini kullanmaktadır.
          </p>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Örnek Kart</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Bu kartın arkaplanı --ion-surface-color değişkenini kullanıyor.
            </IonCardContent>
          </IonCard>

          <div style={{ marginTop: 'var(--spacing-md)' }}>
            <IonButton expand="block" shape="round">Ana Eylem (Primary)</IonButton>
            <IonButton expand="block" fill="outline" color="secondary" style={{ marginTop: 'var(--spacing-xs)' }}>
              İkincil Eylem (Secondary)
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DiscoverPage;