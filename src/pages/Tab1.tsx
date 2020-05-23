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
    options: ["Python", "Burkina faso", "web"],
    name: "Framework"
  }
  );

  return (
    <IonPage>

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
