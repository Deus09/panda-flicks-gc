import React from 'react';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonFooter,
  IonIcon,
  IonToggle,
  IonRange,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { close, lockClosedOutline, sparklesOutline, chevronForwardOutline, chatboxEllipsesOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import DatePicker from './DatePicker';

interface AddMovieModalProps {
  isOpen: boolean;
  onDidDismiss: () => void;
}

const AddMovieModal: React.FC<AddMovieModalProps> = ({ isOpen, onDidDismiss }) => {
  const { t } = useTranslation();

  return (
    <IonModal 
      isOpen={isOpen} 
      onDidDismiss={onDidDismiss}
      initialBreakpoint={1}
      breakpoints={[0, 1]}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t('addMovieModal.title')}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onDidDismiss}>
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList lines="full" className="ion-no-margin ion-padding-horizontal add-movie-form-list">
          
          <IonItem>
            <IonLabel position="stacked" className="form-label">{t('addMovieModal.movieTitleLabel')}</IonLabel>
            <IonInput placeholder={t('addMovieModal.movieTitlePlaceholder')} />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked" className="form-label">{t('addMovieModal.ratingLabel')}</IonLabel>
            <IonRange
              aria-label="Puan Aralığı"
              min={0}
              max={10}
              pin={true}
              ticks={true}
              snaps={true}
              className="ion-padding-top"
            ></IonRange>
          </IonItem>

          <IonItem>
            <IonLabel className="form-label">{t('addMovieModal.watchLaterLabel')}</IonLabel>
            <IonToggle slot="end"></IonToggle>
          </IonItem>

          <IonItem>
            <IonLabel className="form-label">{t('addMovieModal.watchDateLabel')}</IonLabel>
            <DatePicker />
          </IonItem>

          {/* --- YENİDEN DÜZENLENMİŞ YORUM BÖLÜMÜ --- */}

          {/* Yorum Başlığı ve Text Alanı */}
          <IonItem lines="none">
            <div>
              <IonLabel position="stacked" className="form-label">{t('addMovieModal.commentLabel')}</IonLabel>
              <IonTextarea
                placeholder={t('addMovieModal.commentPlaceholder')}
                autoGrow={true}
                className="ion-margin-top"
              />
            </div>
          </IonItem>

          {/* Spoiler Toggle (Ayrı Satır) */}
          <IonItem lines="none">
              <div className="spoiler-toggle-container">
                <IonLabel>{t('addMovieModal.spoilerAlertLabel')}</IonLabel>
                <IonToggle mode="ios"></IonToggle>
              </div>
          </IonItem>
          
          {/* Yorumumu Geliştir (Ayrı Satır) */}
          <IonItem lines="none">
            <div className="pro-feature-container">
              <IonButton fill="clear" size="small" className="pro-feature-button">
                <IonIcon slot="start" icon={lockClosedOutline} />
                {t('addMovieModal.enhanceCommentButton')}
                <span className="pro-badge">PRO</span>
              </IonButton>
            </div>
          </IonItem>

          {/* Karakterle Sohbet Et (Ayrı Satır) */}
          <IonItem lines="none">
              <div className="feature-card" role="button" tabIndex={0}>
                  <IonIcon icon={chatboxEllipsesOutline} className="feature-card-icon" />
                  <div className="feature-card-text">
                      <div className="feature-card-title">
                          {t('addMovieModal.chatWithCharacterButton')}
                          <span className="pro-badge">PRO</span>
                      </div>
                      <div className="feature-card-subtitle">
                          {t('addMovieModal.chatWithCharacterSubtitle')}
                      </div>
                  </div>
                  <IonIcon icon={chevronForwardOutline} className="feature-card-chevron" />
              </div>
          </IonItem>

        </IonList>
      </IonContent>

      <IonFooter className="ion-no-border">
        <IonToolbar>
          <IonGrid className="ion-no-padding ion-padding-horizontal ion-padding-vertical">
            <IonRow>
              <IonCol>
                <IonButton expand="block" fill="outline" color="medium" onClick={onDidDismiss}>
                  {t('addMovieModal.cancelButton')}
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="block" fill="solid">
                  {t('addMovieModal.saveButton')}
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonModal>
  );
};

export default AddMovieModal;