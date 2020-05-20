import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Route } from 'react-router';
import { IonContent, IonRouterOutlet, IonAvatar, IonLabel, IonList, IonItem } from '@ionic/react';
import InfosDetails from "./InfosDetails"
import { useLocation } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';

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



const DisplayInfos: React.FC<DataFormat> = ({ total_count, items }) => {
    const location = useLocation()
    { console.log(location.pathname) }


    return (
        <>

            {total_count ? (
                <IonList>

                    {items
                        .map((item) => (


                            <IonItem button
                                // onClick={() => (<InfosDetails />)}
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
                        ))}
                </IonList>


            ) : (
                    <div>Chargement en cours</div>
                )
            }
        </>


    )
}

export default DisplayInfos;

