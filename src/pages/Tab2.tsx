import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import ReactFC from "react-fusioncharts";
import { ListOptions, listOptions } from "../components/ListOptions";


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
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
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
