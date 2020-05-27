import React, { useState, useEffect } from "react";
import "./ExploreContainer.css";
import Preferences from "./ListePreference";
import AjoutPreference from "../stockage/AjoutPreference";
import { getPreferences, addPreferences } from "../stockage/base";
import { Preference } from "../stockage/Preference";
import { IonPage, IonContent } from "@ionic/react";


const ExploreContainer2: React.FC = () => {
  const [preferences, setPreferences] = useState<Preference[]>([]);

  useEffect(() => {
    getPreferences().then((res) => setPreferences(res));
  }, []);

  return (
    <IonPage>

      <IonContent>
        <AjoutPreference nouvellePreference={(preference) => addPreferences(preference).then(setPreferences)} />

      </IonContent>
    </IonPage>
  );
};

export default ExploreContainer2;



