import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Route } from 'react-router';
import { IonContent, IonRouterOutlet, IonAvatar, IonLabel, IonList, IonItem, IonHeader, IonPage, IonCard, IonCardContent, IonCardTitle } from '@ionic/react';
import InfosDetails from "./InfosDetails"
import { useLocation } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import ReactMarkdown from "react-markdown";
import App from '../App';




interface Project {
    name: string,
    description: string,
    clone_url: string,
    language: string,
    created_at: string,
    updated_at: string,
    owner: {
        avatar_url: string,
        login: string,
        type: string
    }
    readme: string;
}




const DisplayInfosDetails: React.FC<Project> = ({ name, description, owner, readme, clone_url, language, created_at, updated_at }) => {


    return (
        <>


            {
                <IonPage>
                    <IonHeader>
                        <h2>{name}</h2>
                    </IonHeader>
                    <IonContent>
                        <IonCard>
                            <IonAvatar><img src={owner.avatar_url}></img></IonAvatar>

                            <IonCardContent>

                                <p><b>Github Pseudo</b>: {owner.login} </p>
                                <p><b>Clone Url</b>: <a href={clone_url}> {clone_url} </a> </p>
                                <p><b>Language</b>: {language} </p>
                                <p><b>Creation</b>: {new Date(created_at).toUTCString()} </p>
                                <p><b>Last update</b>: {new Date(updated_at).toUTCString()} </p>
                                <p><b>Type</b>: {owner.type} </p>
                            </IonCardContent>
                        </IonCard>

                        <div><b>Description</b>: {description}</div>

                        <IonCard>

                            <IonCardContent>
                                <IonCardTitle>
                                    <b>Readme</b>
                                </IonCardTitle>
                                <div className="Caleb">
                                    <ReactMarkdown source={readme} />
                                </div>
                            </IonCardContent>
                        </IonCard>

                    </IonContent>
                </IonPage>

            }

        </>


    )
}

export default DisplayInfosDetails;