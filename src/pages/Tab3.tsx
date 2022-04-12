import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Button from '../components/ButtonAlert';
import { CardImg } from '../components/CardImg';
import './Tab3.css';
import { ButtonExemple } from '../components/Button';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test components</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tests Components </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonCol size='2' offset='2' >
            <ButtonExemple title="Danger Button"/>
          </IonCol>
          <IonCol size='2' offset='1'>
           <Button title="Clique aqui e veja mais!" msg="Gostaria de participar?" confirm={{text:'Aceito'}} />
          </IonCol>
        </IonRow>
          <CardImg 
              title="test"
              src="test"
              content="test"
              tags={[]}
            />  
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
