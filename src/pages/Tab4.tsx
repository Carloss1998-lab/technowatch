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
                <IonToolbar>
                    <IonTitle>{listOption.name}</IonTitle>
                </IonToolbar>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{listOption.name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ListOptions options={listOption.options} name={"Frameworks"} />


            </IonContent>
        </IonPage>
    );
};

export default Tab4;