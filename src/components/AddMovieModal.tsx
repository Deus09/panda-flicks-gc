import React, { useState } from 'react';
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
  IonCol,
  IonCheckbox // IonCheckbox import edildi
} from '@ionic/react';
import { close, lockClosedOutline, sparklesOutline, chevronForwardOutline, chatboxEllipsesOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import DatePicker from './DatePicker';
import './AddMovieModal.css'; // Özel CSS dosyasını import ediyoruz

interface AddMovieModalProps {
  isOpen: boolean;
  onDidDismiss: () => void;
}

const AddMovieModal: React.FC<AddMovieModalProps> = ({ isOpen, onDidDismiss }) => {
  const { t } = useTranslation();
  const [rating, setRating] = useState<number>(5); // Puanlama değeri için state

  const handleRatingChange = (e: CustomEvent) => {
    setRating(e.detail.value);
    console.log('Seçilen Puan:', e.detail.value); // Değeri konsola yazdırıyoruz, movie card'da kullanabilirsiniz
  };

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
            <IonLabel position="stacked" className="form-label">{t('addMovieModal.ratingLabel')}  <span className="rating-display">{rating}</span> {/* Seçilen puanı gösteren span etiketi */}</IonLabel>
            <IonRange
              aria-label="Puan Aralığı"
              min={1}
              max={10}
              pin={true}
              ticks={true}
              snaps={true}
              className="ion-padding-top"
              value={rating} // State'i range'e bağladık
              onIonChange={handleRatingChange} // Değişiklikleri yakalamak için event handler
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

          {/* Yorum Başlığı ve Text Alanı ile Yorumumu Geliştir Butonu */}
          <div className="comment-textarea-container">
            <IonItem lines="none">
              <IonLabel position="stacked" className="form-label comment-label-container">{t('addMovieModal.commentLabel')}</IonLabel>
              <IonTextarea
                placeholder={t('addMovieModal.commentPlaceholder')}
                autoGrow={true}
                className="comment-textarea" // Özel stil sınıfı eklendi
              />
            </IonItem>

            {/* Sabit Konumlu Yorumumu Geliştir Icon Butonu */}
            <IonButton
              fill="clear"
              size="small"
              className="enhance-comment-icon-button" // Yeni özel stil sınıfı
            >
              <IonIcon icon={sparklesOutline} size="small" /> {/* Yıldız ikonu kullandık */}
              <span className="pro-badge">PRO</span> {/* PRO rozeti */}
            </IonButton>
          </div>

          {/* Spoiler Alert Checkbox ve Açıklaması */}
          <div className="spoiler-container">
            <div className="spoiler-checkbox-row">
              <IonCheckbox aria-label={t('addMovieModal.spoilerAlertLabel')}></IonCheckbox>
              <IonLabel>{t('addMovieModal.spoilerAlertLabel')}</IonLabel>
            </div>
          </div>

          {/* Karakterle Sohbet Et (Ayrı Satır) */}
          <IonItem lines="none">
            <div className="feature-card" role="button" tabIndex={0}>
              <IonIcon icon={chatboxEllipsesOutline} className="feature-card-icon" />
              <div className="feature-card-text">
                <div className="feature-card-title">
                  {t('addMovieModal.chatWithCharacterButton')}
                  <span className="pro-badge">PRO</span>
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
