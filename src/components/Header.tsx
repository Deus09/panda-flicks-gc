import React from 'react';
import { IonHeader, IonToolbar, IonIcon } from '@ionic/react';
import { filmOutline } from 'ionicons/icons';
import './Header.css';

const Header: React.FC = () => {
  return (
    // Translucent özelliğini kaldırdık.
    <IonHeader> 
      <IonToolbar>
        <div className="header-content">
          <IonIcon icon={filmOutline} />
          <span>PandaFlicks</span>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;