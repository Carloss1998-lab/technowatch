import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { ListOptions, listOptions } from "../components/ListOptions";
import { useState } from 'react';


const Tab1: React.FC = () => {
  const [listOption, setListOption] = useState<listOptions>({
    options: ["Neural networks", "Python", "SVM", "Web", "NLP", "R"],
    name: "Stats & Frameworks"
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
        <ListOptions options={listOption.options} name={listOption.name} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
