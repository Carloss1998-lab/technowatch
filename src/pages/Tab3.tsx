import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { ListOptions, listOptions } from "../components/ListOptions";
import { logoWhatsapp } from 'ionicons/icons';



const Tab3: React.FC = () => {
  const [listOption, setListOption] = useState<listOptions>({
    options: ["Tensorflow", "Microsoft", "Facebook", "Whatsapp", "Twitter", "Android", "Google", "Apple"],
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
