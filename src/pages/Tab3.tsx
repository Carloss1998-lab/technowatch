import React, { useState } from 'react';
import { IonContent, IonButton, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import Register from '../components/Register2'
import Login from '../components/Login'
import { ListOptions, listOptions } from "../components/ListOptions";
import Menu from '../components/Menu';



const Tab3: React.FC = () => {
  const [listOption, setListOption] = useState<listOptions>({
    options: ["Anaconda", "Facebook", "Google"],
    name: "Organizations"
  }
  );

  return (
    <IonPage>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ListOptions options={listOption.options} name={"Frameworks"} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
