import React, { useState, useEffect } from 'react';
import { IonCard, IonContent, IonInput, IonLoading, IonPage, IonHeader, IonButton, IonButtons, IonRippleEffect } from '@ionic/react';
import { Link } from 'react-router-dom';
import { LoginUser } from '../components/firebaseConfiguration'
import { toast } from './Toast';
import { withRouter } from "react-router";
import { useAuth } from "./../util/auth.js";

import firebase from "firebase"

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { configuration } from './firebaseConfiguration';


// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
};


const Login = () => {

    const auth = useAuth();
    console.log("cc" + auth)


    const [busy, setBusy] = useState<boolean>(false)
    const [username, setusername] = useState<string>('')

    const [password, setpassword] = useState('')

    async function connexion() {
        setBusy(true)
        const res = LoginUser(username, password, auth);
        if (res) {
            toast('Succès')
        }
        setBusy(false)
    }
    return (
        <IonPage>
            <IonHeader>
                <h1>Se connecter</h1>
            </IonHeader>
            <IonLoading message="Please wait..." duration={0} isOpen={busy} />
            <IonContent className="ion-padding">

                <IonInput
                    placeholder="Username?"
                    onIonChange={(eve: any) => setusername(eve.target.value)} />
                <IonInput
                    type="password"
                    placeholder="Password?"
                    onIonChange={(eve: any) => setpassword(eve.target.value)} />
                <IonButton onClick={connexion}>Login
                <IonRippleEffect></IonRippleEffect>
                </IonButton>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

                <p>
                    Create an account ? <Link to="/register"> Register    </Link>
                   Forget password ? <Link to="/updateaccount"> Change  </Link>
                </p>
            </IonContent>
        </IonPage>
    );
};

export default Login;
