import React, { useState, useEffect } from 'react';
import { IonCard, IonContent, IonInput, IonPage, IonHeader, IonButton, IonButtons } from '@ionic/react';
import { Link } from 'react-router-dom';
import { loginUser } from '../components/firebaseConfiguration'
const Login = () => {
    const [username, setusername] = useState<string>('')

    const [password, setpassword] = useState('')

    async function connexion() {
        const res = await loginUser(username, password);
        console.log(res ? "Login sucess" : "Login failed")
    }
    return (
        <IonPage>
            <IonHeader>
                <h1>Se connecter</h1>
            </IonHeader>
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
                </p>
            </IonContent>
        </IonPage>
    );
};

export default Login;
