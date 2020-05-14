import React, { useState } from 'react';
import { IonContent, IonButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import Register from '../components/Register'
import Login from '../components/Login'
import { ListOptions, listOptions } from "../components/ListOptions";



const Tab3: React.FC = () => {
  const [listOption, setListOption] = useState<listOptions>({
    options: ["Anaconda", "Facebook", "Google"],
    name: "Organizations"
  }
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ListOptions options={listOption.options} name={"Frameworks"} />
        <Login />

        <IonButton routerLink="/login"> Register oooh </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
