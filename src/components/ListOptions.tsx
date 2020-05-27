import React, { useState } from 'react';
import { IonList, IonItem, IonButton, IonInput } from '@ionic/react';
import { useLocation } from 'react-router';

export interface listOptions {
    options: string[];
    name: string;
}



export const ListOptions: React.FC<listOptions> = ({ options, name }) => {
    const [search, setSearch] = useState('');
    const location = useLocation()
    return (

        <IonList>


            {options.map((option) => (
                <IonItem>
                    <IonButton color="secondary"
                        routerLink={"/infos/" + name + "/" + option} >{option}</IonButton>
                </IonItem>))}


            <IonItem>
                <IonInput value={search} placeholder="Enter Input" onIonChange={e => setSearch(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <IonItem>

                <IonButton color="danger"
                    routerLink={"/infos/" + name + "/" + "search" + "/" + search}>OK</IonButton>

            </IonItem>
        </IonList>

    )
}

