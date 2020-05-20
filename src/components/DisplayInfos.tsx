import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonPage, IonHeader, IonList, IonItem } from '@ionic/react';

interface DataFormat {
    total_count?: string,
    incomplete_results?: boolean,
    items: Project[]

}

interface Project {
    name: string,
    description: string
}

const DisplayInfos: React.FC<DataFormat> = ({ total_count, items }) => {

    return (
        <>
            {total_count ? (
                <IonList>
                    {items
                        .map((item) => (
                            <IonItem>
                                {item.name}{console.log("caca")}
                            </IonItem>
                        ))}
                </IonList>
            ) : (
                    <div>Chargement en cours</div>
                )}
        </>


    )
}

export default DisplayInfos;

