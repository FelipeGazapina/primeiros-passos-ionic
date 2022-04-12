import React from 'react';

import { IonButton, IonIcon, IonContent } from '@ionic/react';
import { trash } from 'ionicons/icons';

interface ButtonProps{
  title:string
}

export const ButtonExemple: React.FC<ButtonProps> = ({title}) => (
  <IonButton color="danger">
    <IonIcon slot="start" icon={trash} ></IonIcon>
    {title}
  </IonButton>
)