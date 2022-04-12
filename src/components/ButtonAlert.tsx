import React from 'react';
import { IonButton, useIonAlert } from '@ionic/react'

interface ButtonProps {
  title: string, 
  msg: string, 
  confirm: { 
    text: string
  }
}

const AlertExemple: React.FC<ButtonProps> = ({ title, msg, confirm }) => {
  const [present] = useIonAlert();

  return (
        <IonButton expand="full" onClick={() => present(msg , [confirm])} >
          {title}
        </IonButton>
    
  );
};

export default AlertExemple