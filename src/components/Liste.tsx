import React from "react";
import { IonList, IonItem } from "@ionic/react";

interface Props {
  data: {
    Country: string;
    TotalConfirmed: number;
  }[];
  filtre: string;
}

const Liste = (props: Props) => (
  <>
    {props.data ? (
      <IonList>
        {props.data
          .filter(
            (element) => !props.filtre || element.Country.includes(props.filtre)
          )
          .map((element) => (
            <IonItem>
              {element.Country} ({element.TotalConfirmed})
            </IonItem>
          ))}
      </IonList>
    ) : (
      <div>Chargement en cours</div>
    )}
  </>
);

export default Liste;
