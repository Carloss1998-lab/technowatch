import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import ReactFC from "react-fusioncharts";
import { ListOptions, listOptions } from "../components/ListOptions";
import Menu from ".././components/Menu"


import { chartConfigs } from "./graphe"
//import { MenuExample } from "../components/menu"
const Tab2: React.FC = () => {


  const [listOption, setListOption] = useState<listOptions>({
    options: ["NLP", "Neural networks", "SVM"],
    name: "Stats"
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
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ReactFC {...chartConfigs} />
        <ListOptions options={listOption.options} name={"Frameworks"} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
