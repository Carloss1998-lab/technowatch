import React from "react";
import { Preference } from "../stockage/Preference";
import { IonList, IonItem, IonLabel, IonAvatar } from "@ionic/react";
import { useLocation } from 'react-router';

interface Props {
    preferences: Preference[];
}



const Preferences = ({ preferences }: Props) => {
    const location = useLocation();
    return (
        <IonList>
            {preferences
                .filter(pref => pref.Login != "erreur")
                .map((preference) => (
                    <IonItem button
                        key={preference.Login}
                        routerLink={location.pathname + "/" + preference.Login + "/" + preference.repositorie}>

                        <IonLabel>
                            <h2>Pseudo Github : {preference.Login}</h2>

                            <h2>Repository : {preference.repositorie}</h2>
                            <h3>{preference.description}</h3>
                        </IonLabel>
                    </IonItem>
                ))}
        </IonList>
    )
};

export default Preferences;

