import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Liste from "../components/Liste";
import fakedata from "../data/fakedata.json";
import Geoloc from "../components/Geoloc"
import { ListOptions, listOptions } from "../components/ListOptions";
import { useState } from 'react';
import Menu from ".././components/Menu"
import Menue from ".././components/moenu"
//import { MenuExample } from "../components/menu"

const Tab1: React.FC = () => {
  const [listOption, setListOption] = useState<listOptions>({
    options: ["Python", "R", "web"],
    name: "Framework"
  }
  );

  return (
    <IonPage>

      <IonHeader>

        <IonToolbar color="danger">
          <IonButtons slot="start">
            <IonMenuButton autoHide={false} ></IonMenuButton>

          </IonButtons>

          <IonButtons slot="primary">
            <Menu></Menu>

          </IonButtons>

          <IonTitle class="ion-text-center">yStats</IonTitle>
        </IonToolbar>

      </IonHeader>


      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ListOptions options={listOption.options} name={"Frameworks"} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
