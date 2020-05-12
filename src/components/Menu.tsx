import React, { useState } from 'react';
import { RouteComponentProps, withRouter, useLocation } from 'react-router';

import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonToggle } from '@ionic/react';
import { hammer, moonOutline, help, informationCircleOutline, logIn, logOut, mapOutline, peopleOutline, person, personAdd, statsChartOutline, cartOutline, pulseOutline, optionsOutline } from 'ionicons/icons';
import './Menu.css'


const routes = {
  appPages: [
    { title: 'Accueil', path: '/tabs/tab1', icon: pulseOutline },
    { title: 'Dashboard', path: '/tabs/tab1', icon: statsChartOutline },
    { title: 'Products', path: '/tabs/tab2', icon: cartOutline },
    { title: 'Offre', path: '/tabs/tab3', icon: optionsOutline },
    { title: 'About', path: '/tabs/tab1', icon: informationCircleOutline }
  ]
};

interface Pages {
  title: string,
  path: string,
  icon: string,
}
type Props = RouteComponentProps<{}>;

const Menu = ({ history }: Props) => {
  const [activePage, setActivePage] = useState(routes.appPages[0].title);


  function renderlistItems(list: Pages[]) {
    return list
      .filter(route => !!route.path)
      .map(page => (
        <IonMenuToggle key={page.title} menu="first" autoHide={false}>
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
    <IonMenu type="reveal" contentId="main" menuId="first" side="end">

      <IonContent forceOverscroll={false}>
        {renderlistItems(routes.appPages)}

      </IonContent>
    </IonMenu>


  );
};


export default withRouter(
  Menu
);
