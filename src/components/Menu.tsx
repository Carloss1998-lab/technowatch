import React, { useState } from 'react';
import { RouteComponentProps, withRouter, useLocation } from 'react-router';

import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonToggle } from '@ionic/react';
import { help, informationCircleOutline, person, statsChartOutline, cartOutline, pulseOutline, optionsOutline } from 'ionicons/icons';
import './Menu.css'
import { IonPopover, IonButton } from '@ionic/react';

import { ellipsisHorizontal } from 'ionicons/icons';

import { Link } from 'react-router-dom';


const routes = {
  appPages: [
    { title: 'Accueil', path: 'tab1/tabs/tab1', icon: pulseOutline },
    { title: 'Dashboard', path: 'tabs/tabs/tab1', icon: statsChartOutline },
    { title: 'Products', path: '/tabs/tab2', icon: cartOutline },
    { title: 'Offre', path: '/tabs/tab3', icon: optionsOutline },
    { title: 'About', path: '/tabs/tab1', icon: informationCircleOutline },
    { title: 'Login', path: '/login', icon: person },
    { title: 'Support', path: '/support', icon: help },

  ]
};

interface Pages {
  title: string,
  path: string,
  icon: string,
}
interface Props extends RouteComponentProps { };

const Menu = ({ history }: Props) => {
  const [activePage, setActivePage] = useState(routes.appPages[0].title);
  const [showPopover, setShowPopover] = useState<{ open: boolean, event: Event | undefined }>({
    open: false,
    event: undefined
  });


  function renderlistItems(list: Pages[]) {
    return list
      .filter(route => !!route.path)
      .map(page => (
        <IonItem button
          color={page.title === activePage ? 'primary' : ''}
          onClick={() => navigateToPage(page)}
        //routerLink={page.path}
        >

          <IonIcon slot="start" icon={page.icon}></IonIcon>
          <IonLabel>
            {page.title}
          </IonLabel>
        </IonItem>
      ));
  }

  const navigateToPage = (page: Pages) => {
    history.push(page.path);
    setActivePage(page.title);
    setShowPopover({ open: false, event: undefined })
    console.log(page.path)
  }
  return (
    <>
      <IonPopover
        isOpen={showPopover.open}
        event={showPopover.event}
        onDidDismiss={e => setShowPopover({ open: false, event: undefined })}
      >
        <p>This is popover content</p>
        {renderlistItems(routes.appPages)}

      </IonPopover>

      <IonButton onClick={(e) => setShowPopover({ open: true, event: e.nativeEvent })}>
        <IonIcon slot="start" icon={ellipsisHorizontal}></IonIcon>
      </IonButton>
    </>

  );
}


//export default Menu

export default withRouter(
  Menu
);




