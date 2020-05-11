import React, { useState } from "react";
import { IonButton } from "@ionic/react";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";

const Geoloc = () => {
  const [location, setLocation] = useState<Geoposition>();
  return (
    <IonButton
      color="danger"
      onClick={() => {
        Geolocation.getCurrentPosition().then((geoloc) => {
          console.log(
            "Cool " + geoloc.coords.latitude + " " + geoloc.coords.longitude
          );
          setLocation(geoloc);
        });
        // TODO : ajouter .catch pour le cas où la personne refuse la geoloc
      }}
    >
      Localise moi {location?.coords.latitude} {location?.coords.longitude}
    </IonButton>
  );
};

export default Geoloc;
