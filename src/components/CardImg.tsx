import React from 'react';

import { IonRow, IonCol,IonButton, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,IonCardContent, IonItem, IonLabel } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

interface cardProps{
  src: string,
  title:string, 
  content:string, 
  tags: []
}

export const CardImg: React.FC<cardProps> = ({title}) => (
  <IonRow>
    <IonCol>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Card, title</IonCardTitle>
          <IonCardSubtitle>Card, subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
        </IonCardContent>
      </IonCard>
    </IonCol>
    <IonCol>
    <IonCard>
      <IonItem>
        <IonIcon icon={pin} slot="start" />
        <IonLabel>ion-item in a card, icon left, button right</IonLabel>
        <IonButton fill="outline" slot="end">View</IonButton>
      </IonItem>

      <IonCardContent>
        This is content, without any paragraph or header tags,
        within an ion-cardContent element.
      </IonCardContent>
    </IonCard>
    </IonCol>
    <IonCol>
      <IonCard>
        <IonItem href="#" className="ion-activated">
          <IonIcon icon={wifi} slot="start" />
          <IonLabel>Card Link Item 1 activated</IonLabel>
        </IonItem>

        <IonItem href="#">
          <IonIcon icon={wine} slot="start" />
          <IonLabel>Card Link Item 2</IonLabel>
        </IonItem>

        <IonItem href="#" className="ion-activated">
          <IonIcon icon={warning} slot="start" />
          <IonLabel>Card Button Item 1 activated</IonLabel>
        </IonItem>

        <IonItem href="#">
          <IonIcon icon={walk} slot="start" />
          <IonLabel>Card Button Item 2</IonLabel>
        </IonItem>
      </IonCard>
    </IonCol>
  </IonRow>
  
  
  
)