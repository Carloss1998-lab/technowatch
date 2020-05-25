import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonApp, IonMenuButton } from '@ionic/react';
import { ListOptions, listOptions } from "../components/ListOptions";

import Menu from ".././components/Menu"

const Tab4: React.FC = () => {

    const [listOption, setListOption] = useState<listOptions>({
        options: ["Covid19", "climate change", "terrorism"],
        name: "Topics"
    }
    );

    return (

        <IonPage>

            <IonContent>
                <IonToolbar>
                    <IonTitle>{listOption.name}</IonTitle>
                </IonToolbar>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{listOption.name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ListOptions options={listOption.options} name={listOption.name} />


            </IonContent>
        </IonPage>
    );
};

export default Tab4;