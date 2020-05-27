import React, { useState } from "react";
import {
    IonInput,
    IonTextarea,
    IonButton,
    IonItem,
    IonLabel,
} from "@ionic/react";
import { Preference } from "./Preference";
import { text } from "ionicons/icons";

interface Props {
    nouvellePreference: (preference: Preference) => void;
}

const AjoutTache = ({ nouvellePreference }: Props) => {
    const [Login, setLogin] = useState<string>();
    const [repositorie, setrepositorie] = useState<string>();
    const [description, setdescription] = useState<string>();
    return (
        <>

            <IonInput
                placeholder="Login"
                onIonChange={(e) => setLogin(e.detail.value!)} clearInput={true}
            ></IonInput>
            <IonInput
                placeholder="repositorie"
                onIonChange={(e) => setrepositorie(e.detail.value!)} clearInput
            ></IonInput>
            <IonInput
                placeholder="description"
                onIonChange={(e) => setdescription(e.detail.value!)} clearInput
            ></IonInput>


            <IonButton
                onClick={() =>
                    nouvellePreference({
                        Login: Login!,
                        repositorie: repositorie!,
                        description: description,
                    })
                }
                routerLink={"/tabs/tab4"}
            >
                Ajouter
      </IonButton>
        </>
    );
};

export default AjoutTache;
