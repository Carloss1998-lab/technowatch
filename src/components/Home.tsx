import React from 'react';
import { IonCard, IonCardHeader, IonCardContent } from '@ionic/react';

const Home = () => {
    return (
        <IonCard>
            <IonCardHeader>
                <h1>Ionic + React</h1>
            </IonCardHeader>
            <IonCardContent>
                This is my first Ionic React application!
          </IonCardContent>
        </IonCard>
    );
};

export default Home;
