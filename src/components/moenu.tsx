import React, { useState } from 'react';
import { RouteComponentProps, withRouter, useLocation } from 'react-router';

import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonToggle } from '@ionic/react';
import { hammer, moonOutline, help, informationCircleOutline, logIn, logOut, mapOutline, peopleOutline, person, personAdd, statsChartOutline, cartOutline, pulseOutline, optionsOutline, star, addCircleOutline, happy, bulb, briefcase, terminalOutline } from 'ionicons/icons';
import './Menu.css'


const routes = {
    appPages: [
        { title: 'Add Preference', path: '/AjoutPreference', icon: addCircleOutline },
        { title: 'Mes Preferences', path: '/tabs/tab4', icon: happy },
        { title: 'FrameWork & Informatique', path: '/tabs/tab1', icon: terminalOutline },
        { title: 'Topics', path: '/tabs/tab2', icon: bulb },
        { title: 'Organizations', path: '/tabs/tab3', icon: briefcase },
        { title: 'Contact', path: '/contact', icon: help },
    ]
};



interface Pages {
    title: string,
    path: string,
    icon: string,
}
type Props = RouteComponentProps<{}>;

const Menue = ({ history }: Props) => {
    const [activePage, setActivePage] = useState(routes.appPages[0].title);


    function renderlistItems(list: Pages[]) {
        return list
            .filter(route => !!route.path)
            .map(page => (


                <IonMenuToggle key={page.title} menu="first" autoHide={false}>
                    <IonItem button
                        color={page.title === activePage ? 'primary' : ''}
                        onClick={() => navigateToPage(page)}>

                        <IonLabel>
                            {page.title}
                        </IonLabel>
                        <IonIcon slot="start" icon={page.icon}></IonIcon>

                    </IonItem>
                </IonMenuToggle>

            ));
    }

    const navigateToPage = (page: Pages) => {
        history.push(page.path);
        setActivePage(page.title);
    }



    return (
        <IonMenu type="overlay" contentId="main" menuId="first" side="start">

            <IonContent forceOverscroll={false}>

                <IonList>
                    <IonListHeader>Menu</IonListHeader>

                    {renderlistItems(routes.appPages)}
                </IonList>

            </IonContent>
        </IonMenu>


    );
};


export default withRouter(
    Menue
);