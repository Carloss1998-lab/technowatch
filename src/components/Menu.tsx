import React, { useState } from 'react';
import { RouteComponentProps, withRouter, useLocation } from 'react-router';
import { IonMenuButton, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonToggle } from '@ionic/react';
import { hammer, moonOutline, help, informationCircleOutline, logIn, logOut, mapOutline, peopleOutline, person, personAdd, statsChartOutline, cartOutline, pulseOutline, optionsOutline } from 'ionicons/icons';
import {

  IonRouterOutlet,

} from '@ionic/react';
import './Menu.css'
import { menuController } from '@ionic/core';


const routes = {
  appPages: [
    { title: 'Accueil', path: '/tabs/tab1', icon: pulseOutline },
    { title: 'Dashboard', path: '/tabs/tab1', icon: statsChartOutline },
    { title: 'Products', path: '/tabs/tab2', icon: cartOutline },
    { title: 'Offre', path: '/tabs/tab3', icon: optionsOutline },
    { title: 'About', path: '/tabs/tab1', icon: informationCircleOutline }
  ],
  loggedInPages: [
    { title: 'Account', path: '/account', icon: person },
    { title: 'Support', path: '/support', icon: help },
    { title: 'Logout', path: '/logout', icon: logOut }
  ],
  loggedOutPages: [
    { title: 'Login', path: '/login', icon: logIn },
    { title: 'Support', path: '/support', icon: help },
    { title: 'Signup', path: '/signup', icon: personAdd }
  ]
};

interface Pages {
  title: string,
  path: string,
  icon: string,
  routerDirection?: string
}
interface StateProps {
  darkMode: boolean;
  isAuthenticated: boolean;
  menuEnabled: boolean;
}
type Props = RouteComponentProps<{}>;

const Menu = ({ history }: Props) => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(routes.appPages[0].title);


  function renderlistItems(list: Pages[]) {
    return list
      .filter(route => !!route.path)
      .map(page => (
        <IonMenuToggle key={page.title} menu="first"  >
          <IonItem button
            color={page.title === activePage ? 'primary' : ''}
            onClick={() => navigateToPage(page)}>

            <IonIcon slot="start" name={page.icon}></IonIcon>
            <IonLabel>
              {page.title}
            </IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }
  const navigateToPage = (page: Pages) => {
    history.push(page.path);
    setActivePage(page.title);
  }

  return (
    <IonMenu type="overlay" contentId="main" menuId="first">

      <IonContent forceOverscroll={false}>
        <IonList lines="none">
          <IonListHeader>Service</IonListHeader>
          {renderlistItems(routes.appPages)}
        </IonList>
        <IonList lines="none">
          {renderlistItems(routes.loggedInPages)}
          <IonItem>
            <IonIcon slot="start" icon={moonOutline}></IonIcon>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle />
          </IonItem>
        </IonList>
        <IonList lines="none">
          <IonListHeader>Tutorial</IonListHeader>
          <IonItem button onClick={() => {
            history.push('/tutorial');
          }}>
            <IonIcon slot="start" icon={hammer} />
          Show Tutorial
        </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>


  );
};


export default withRouter(
  Menu
);
