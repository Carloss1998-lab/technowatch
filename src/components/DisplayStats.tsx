import React from 'react';
import { IonAvatar, IonLabel, IonList, IonItem } from '@ionic/react';
import { useLocation } from 'react-router';

interface DataFormat {
    all?: number[],
    owner?: boolean,

}



const DisplayStats: React.FC<DataFormat> = ({ all, owner }) => {
    const location = useLocation()


    return (

        <IonList>

            {all ? (all
                .map((week) => (

                    <div>{week}{owner}</div>

                ))) : <div>No data available for this research</div>}
        </IonList>

    )
}



export default DisplayStats;

