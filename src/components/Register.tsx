import React, { useState, useEffect } from 'react';
import { IonCard, IonContent, IonInput, IonPage, IonHeader, IonButton, IonButtons } from '@ionic/react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [username, setusername] = useState<string>('')

    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')


    function registerUser() {
        console.log(username, password, confirmpassword);
    }
    return (
        <IonPage>
            <IonHeader>
                <h1>Register</h1>
            </IonHeader>
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

                <IonButton onClick={registerUser}>Register</IonButton>
                <p>
                    Already have an account ? <Link to="/login"> Login</Link>
                </p>
            </IonContent>
        </IonPage>
    );
};


export default Register;
