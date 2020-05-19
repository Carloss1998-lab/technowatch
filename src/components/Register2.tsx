import React, { useState, useEffect } from 'react';
import { IonCard, IonContent, IonLoading, IonInput, IonPage, IonHeader, IonButton, IonButtons } from '@ionic/react';
import { Link } from 'react-router-dom';
import { toast } from './Toast';
import { RegisterUser, VerificationEmail } from './firebaseConfiguration';
import { useAuth } from "./../util/auth.js";

const Register2 = () => {
    const [username, setusername] = useState<string>('')

    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [busy, setBusy] = useState<boolean>(false)
    const auth = useAuth();


    async function register() {
        // Valiation
        setBusy(true)

        if (password !== confirmpassword) {
            return toast("Les mots de passe ne sont pas identiques")
        }
        if (username.trim() === '' || password.trim() === '') {
            return toast("Veullez entrer votre mot de passe et votre username ")
        }
        const res = RegisterUser(username, password, auth)
        if (res) {
            toast("Succès")
            VerificationEmail()
        }
        setBusy(false)

    }
    return (
        <IonPage>
            <IonHeader>
                <h1>Register</h1>
            </IonHeader>
            <IonLoading message="Register  in progress..." duration={0} isOpen={busy} />

            <IonContent className="ion-padding">
                <IonInput
                    placeholder="Username?"
                    onIonChange={(eve: any) => setusername(eve.target.value)} />
                <IonInput
                    type="password"
                    placeholder="Password?"
                    onIonChange={(eve: any) => setpassword(eve.target.value)} />
                <IonInput
                    type="password"
                    placeholder="Confirm Password?"
                    onIonChange={(eve: any) => setconfirmpassword(eve.target.value)} />

                <IonButton onClick={register}>Register</IonButton>
                <p>
                    Already have an account ? <Link to="/login"> Login</Link>
                </p>
            </IonContent>
        </IonPage>
    );
};


export default Register2;
