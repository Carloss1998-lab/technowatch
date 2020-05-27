import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { ListOptions, listOptions } from "../components/ListOptions";



const Tab3: React.FC = () => {
  const [listOption, setListOption] = useState<listOptions>({
    options: ["Tensorflow", "Facebook", "Google"],
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
        <ListOptions options={listOption.options} name={listOption.name} />


      </IonContent>
    </IonPage>
  );
};

export default Tab3;
