import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import ReactFC from "react-fusioncharts";
import { ListOptions, listOptions } from "../components/ListOptions";
import Menu from ".././components/Menu"


import { chartConfigs } from "./graphe"
const Tab2: React.FC = () => {


  const [listOption, setListOption] = useState<listOptions>({
    options: ["Covid19", "Machine learning", "Global warning"],
    name: "Topics"
  }
  );

  return (
    <IonPage>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ReactFC {...chartConfigs} />
        <ListOptions options={listOption.options} name={listOption.name} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
