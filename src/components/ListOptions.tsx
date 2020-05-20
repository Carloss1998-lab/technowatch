import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonButton } from '@ionic/react';
import Infos from './Infos';

export interface listOptions {
    options: string[];
    name: string;
}

export const ListOptions: React.FC<listOptions> = ({ options, name }) => (

    <IonList>
        {options.map((option) => (
            <IonItem>
                <IonButton color="secondary" routerLink={"/infos/" + option} >{option}</IonButton>
            </IonItem>))}
    </IonList>

)

