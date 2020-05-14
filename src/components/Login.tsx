import React, { useState, useEffect } from 'react';
import { IonCard, IonContent, IonInput, IonLoading, IonPage, IonHeader, IonButton, IonButtons } from '@ionic/react';
import { Link } from 'react-router-dom';
import { loginUser } from '../components/firebaseConfiguration'
import { toast } from './Toast';
import { withRouter } from "react-router";


const Login = () => {

    const [busy, setBusy] = useState<boolean>(false)
    const [username, setusername] = useState<string>('')

    const [password, setpassword] = useState('')

    async function connexion() {
        setBusy(true)
        const res = await loginUser(username, password);
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
                <IonButton onClick={connexion}>Login</IonButton>
                <p>
                    Create an account ? <Link to="/register"> Register</Link>
                   Forget password ? <Link to="/updateaccount"> Change</Link>
                </p>
            </IonContent>
        </IonPage>
    );
};

export default Login;
