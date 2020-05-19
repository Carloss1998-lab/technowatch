import React, { Component } from "react"
import { IonCard, IonContent, IonInput, IonLoading, IonPage, IonHeader, IonButton, IonButtons } from '@ionic/react';
import firebase from "firebase"
import { Link } from 'react-router-dom';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { configuration } from './firebaseConfiguration';


// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    //signInSuccessUrl: 'http://localhost:8100/',
    // callbacks: {
    //   signInSuccess: '/tabs'
    //},
    signInSuccess: '/tabs',

    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
};

const Register = () => {
    return (
        <IonPage>
            <IonHeader>
                <h1>Se connecter</h1>
            </IonHeader>
            <IonContent className="ion-padding">
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                <p>
                    Already have an account ? <Link to="/login"> Login</Link>
                </p>
            </IonContent>
        </IonPage>
    )

};
export default Register