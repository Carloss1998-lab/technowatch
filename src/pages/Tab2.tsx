import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import { ListOptions, listOptions } from "../components/ListOptions";


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
        <ListOptions options={listOption.options} name={listOption.name} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
