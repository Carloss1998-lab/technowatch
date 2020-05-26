import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonApp, IonMenuButton } from '@ionic/react';
import { ListOptions, listOptions } from "../components/ListOptions";

import Menu from ".././components/Menu"
import ExploreContainer from '../components/ExploreContainer';

const Tab4: React.FC = () => {

    const [listOption, setListOption] = useState<listOptions>({
        options: ["Covid19", "climate change", "terrorism"],
        name: "Topics"
    }
    );

    return (

        <IonPage>

            <IonContent>
                <ExploreContainer />

            </IonContent>
        </IonPage>
    );
};

export default Tab4;