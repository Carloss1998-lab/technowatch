import React, { useState } from 'react';
import { IonToast, IonContent, IonButton } from '@ionic/react';

export const Toast: React.FC = () => {
    const [showToast1, setShowToast1] = useState(false);
    const [showToast2, setShowToast2] = useState(false);

    return (
        <IonContent>
            <IonButton onClick={() => setShowToast1(true)} expand="block">Show Toast 1</IonButton>
            <IonButton onClick={() => setShowToast2(true)} expand="block">Show Toast 2</IonButton>
            <IonToast
                isOpen={showToast1}
                onDidDismiss={() => setShowToast1(false)}
                message="Your settings have been saved."
                duration={200}
            />
        </IonContent>
    );
};

