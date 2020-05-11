import React, { useState } from 'react';
import { IonPopover, IonButton } from '@ionic/react';

const Bulle: React.FC = () => {
    const [showPopover, setShowPopover] = useState(false);

    return (
        <>
            <IonPopover
                isOpen={showPopover}
                onDidDismiss={e => setShowPopover(false)}
            >
                <p>This is popover content</p>
            </IonPopover>
            <IonButton onClick={() => setShowPopover(true)}>Show Popover</IonButton>

        </>
    );
};

export default Bulle;

