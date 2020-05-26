import React, { useState } from 'react';
import { IonList, IonItem, IonButton, IonSearchbar, IonToolbar, IonInput } from '@ionic/react';
import InfosResarch from "./InfosResearch";
import { RouteComponentProps, useLocation } from 'react-router';

export interface listOptions {
    options: string[];
    name: string;
}



export const ListOptions: React.FC<listOptions> = ({ options, name }) => {
    const [search, setSearch] = useState('');
    const location = useLocation()
    return (

        <IonList>
            <IonItem>
                <IonInput value={search} placeholder="Enter Input" onIonChange={e => setSearch(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <IonItem>
                <IonButton color="danger"
                    //onClick={InfosResarch({ search })}
                    routerLink={"/infos" + "/" + search}>OK</IonButton>

            </IonItem>

            {options.map((option) => (
                <IonItem>
                    <IonButton color="secondary" routerLink={"/infos/" + option} >{option}</IonButton>
                </IonItem>))}
        </IonList>

    )
}

