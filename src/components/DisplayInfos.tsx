import React from 'react';
import { IonAvatar, IonLabel, IonList, IonItem } from '@ionic/react';
import { useLocation } from 'react-router';

interface DataFormat {
    total_count?: string,
    incomplete_results?: boolean,
    items: Project[],

}

interface Project {
    name: string,
    description: string,
    owner: {
        avatar_url: string,
        login: string
    }

}



const DisplayInfos: React.FC<DataFormat> = ({ items }) => {
    const location = useLocation()


    return (

        <IonList>

            {items ? (items
                .map((item) => (


                    <IonItem button
                        routerLink={location.pathname + "/" + item.owner.login + "/" + item.name}
                    >

                        <IonAvatar slot="start">
                            <img src={item.owner.avatar_url}></img>
                        </IonAvatar>
                        <IonLabel>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </IonLabel>
                    </IonItem>
                ))) : <div>No data available for this research</div>}
        </IonList>

    )
}



export default DisplayInfos;

