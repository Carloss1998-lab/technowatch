import React, { useState, useEffect } from 'react';
import { IonCard, IonContent, IonLoading, IonInput, IonPage, IonHeader, IonButton, IonButtons } from '@ionic/react';
import { Link } from 'react-router-dom';
import { toast } from './Toast';
import { UpdateUser } from '../components/firebaseConfiguration';
import { useAuth } from "./../util/auth.js";

const Update = () => {
    const [email, setemail] = useState<string>('')

    const [busy, setBusy] = useState<boolean>(false)

    const auth = useAuth();

    async function update() {
        // Valiation
        if (email.trim() === '') {
            return toast("Veuillez entrer votre email ")
        }
        setBusy(true)

        const res = UpdateUser(email, auth)
        if (res) {
            toast("Succès")
        }
        setBusy(false)

    }
    return (
        <IonPage>
            <IonHeader>
                <h1>Reset</h1>
            </IonHeader>
            <IonLoading message="We sent you an update email..." duration={0} isOpen={busy} />

            <IonContent className="ion-padding">
                <IonInput
                    placeholder="Username?"
                    onIonChange={(eve: any) => setemail(eve.target.value)} />
                <IonButton onClick={update}>update</IonButton>
                <p>
                    Already have an account ? <Link to="/login"> Login</Link>
                </p>
            </IonContent>
        </IonPage>
    );
};


export default Update;
