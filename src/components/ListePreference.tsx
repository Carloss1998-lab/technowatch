import React from "react";
import { Preference } from "../stockage/Preference";
import { IonList, IonItem, IonLabel, IonAvatar } from "@ionic/react";

interface Props {
    preferences: Preference[];
}

const Preferences = ({ preferences }: Props) => (
    <IonList>
        {preferences.map((preference) => (
            <IonItem key={preference.Login}>
                <IonLabel>
                    <h2>{preference.Login}</h2>

                    <h2>{preference.repositorie}</h2>

                    <h3>{preference.description}</h3>
                </IonLabel>
            </IonItem>
        ))}
    </IonList>
);

export default Preferences;