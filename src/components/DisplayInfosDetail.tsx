import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Route } from 'react-router';
import { IonContent, IonRouterOutlet, IonAvatar, IonLabel, IonList, IonItem, IonHeader, IonPage, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonRow, IonButton, IonCol, IonIcon, IonFab, IonFabButton, IonFabList } from '@ionic/react';
import InfosDetails from "./InfosDetails"
import { useLocation } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
//import ReactMarkdown from "react-markdown";
import App from '../App';
import { heart, arrowRedo, share, logoVimeo, logoFacebook, logoInstagram, logoTwitter, add, arrowForwardCircle, arrowBackCircle, logoWhatsapp } from 'ionicons/icons';
import Preferences from "./ListePreference";
import { getPreferences, addPreferences } from ".././stockage/base";
import { Preference } from ".././stockage/Preference";
import { toast } from './Toast';


const ReactMarkdown = require('react-markdown/with-html')


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


    const [pref, setPref] = useState<Preference>(
        {
            Login: owner.login ? owner.login : "erreur",
            repositorie: name ? name : "erreur",
            description: description ? description : "erreur"
        })


    return (
        <>


            {name ?
                <IonPage>

                    <IonHeader>
                        <h2>{name}</h2>
                    </IonHeader>
                    <IonContent>
                        <IonCard>
                            <IonCardHeader class="ion-text-center" >

                                <IonAvatar><img src={owner.avatar_url}></img></IonAvatar>
                            </IonCardHeader>

                            <IonCardContent>
                                <p><b>Github Pseudo</b>: {owner.login} </p>
                                <p><b>Clone Url</b>: <a href={clone_url}> {clone_url} </a> </p>
                                <p><b>Language</b>: {language} </p>
                                <p><b>Creation</b>: {new Date(created_at).toUTCString()} </p>
                                <p><b>Last update</b>: {new Date(updated_at).toUTCString()} </p>
                                <p><b>Type</b>: {owner.type} </p>
                            </IonCardContent>
                            <IonCol>
                                <IonButton color="danger" onClick={() => {
                                    addPreferences(pref)
                                    toast('The preference has been added with succes')
                                }} >
                                    Follow <IonIcon icon={heart}></IonIcon>
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton color="danger" onClick={() => toast("Not yet available")} >
                                    Share <IonIcon icon={arrowRedo}></IonIcon>

                                </IonButton>
                            </IonCol>
                        </IonCard>
                        <IonFab vertical="bottom" horizontal="end" slot="fixed">
                            <IonFabButton>
                                <IonIcon icon={share} />
                            </IonFabButton>
                            <IonFabList side="top">
                                <IonFabButton><IonIcon icon={logoFacebook} /></IonFabButton>
                            </IonFabList>
                            <IonFabList side="start">
                                <IonFabButton><IonIcon icon={logoWhatsapp} /></IonFabButton>
                            </IonFabList>
                        </IonFab>
                        <div><b>Description</b>: {description}</div>

                        <IonCard>

                            <IonCardContent>
                                <IonCardTitle>
                                    <b>Readme</b>
                                </IonCardTitle>
                                <div className="Caleb">
                                    <ReactMarkdown source={readme} escapeHtml={false} />
                                </div>
                            </IonCardContent>
                        </IonCard>

                    </IonContent>
                </IonPage>

                : <div>NO data for this research</div>}

        </>


    )
}

export default DisplayInfosDetails;