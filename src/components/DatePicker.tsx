import React, { useState } from 'react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';

const DatePicker: React.FC = () => {
  return (
    <>
      <IonDatetimeButton datetime="datetime"></IonDatetimeButton>

      <IonModal keepContentsMounted={true}>
        <IonDatetime id="datetime" presentation="date" preferWheel={true}></IonDatetime>
      </IonModal>
    </>
  );
};

export default DatePicker;