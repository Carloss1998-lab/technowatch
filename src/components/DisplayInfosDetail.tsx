import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Route } from 'react-router';
import { IonContent, IonRouterOutlet, IonAvatar, IonLabel, IonList, IonItem, IonHeader, IonPage } from '@ionic/react';
import InfosDetails from "./InfosDetails"
import { useLocation } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';



interface Project {
    name: string,
    description: string,
    owner: {
        avatar_url: string,
        login: string,
        type: string
    }
    readme: string;
}



const DisplayInfosDetails: React.FC<Project> = ({ name, description, owner, readme }) => {


    return (
        <>

            {name ? (
                <IonPage>
                    <IonHeader>
                        <div>News on {name}</div>
                    </IonHeader>                    <IonContent>
                        <div>
                            <p> Description : {description}</p>

                            <p>Owner's informations :
                                <h3>Github Pseudo: {owner.login}</h3>
                                <h3>type : {owner.type}</h3>
                            </p>

                        </div>
                        <div>
                            Readme: {readme}
                        </div>
                    </IonContent>
                </IonPage>




            ) : (
                    <div>Loading...</div>
                )
            }
        </>


    )
}

export default DisplayInfosDetails;

