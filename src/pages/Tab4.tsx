import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ListOptions, listOptions } from "../components/ListOptions";


const Tab4: React.FC = () => {

    const [listOption, setListOption] = useState<listOptions>({
        options: ["Covid19", "climate change", "terrorism"],
        name: "Topics"
    }
    );

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{listOption.name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
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