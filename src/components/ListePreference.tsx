import React from "react";
import { Preference } from "../stockage/Preference";
import { IonList, IonItem, IonLabel, IonAvatar } from "@ionic/react";
import { useLocation } from 'react-router';

interface Props {
    preferences: Preference[];
}

const Preferences = ({ preferences }: Props) => (
    <IonList>
        {preferences
            .filter(pref => pref.Login != "erreur")
            .map((preference) => (
                <IonItem key={preference.Login}>

                    <IonLabel>
                        <h2>Pseudoo Github : {preference.Login}</h2>

                        <h2>Repository : {preference.repositorie}</h2>

                        <h3>{preference.description}</h3>
                    </IonLabel>
                </IonItem>
            ))}
    </IonList>
);

export default Preferences;

