

import React, { useState } from 'react';
import { RouteComponentProps, withRouter, useLocation } from 'react-router';

import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonToggle } from '@ionic/react';
import { help, informationCircleOutline, logIn, logOut, person, statsChartOutline, cartOutline, pulseOutline, optionsOutline } from 'ionicons/icons';
import './Menu.css'
import { IonPopover, IonButton } from '@ionic/react';

import { ellipsisHorizontal } from 'ionicons/icons';

import { Link } from 'react-router-dom';
import { useRouter } from "./../util/router.js";
import { useAuth } from "./../util/auth.js";


const routes = {
  appPages: [
    { title: 'Logout', path: '/logout', icon: logOut },
    { title: 'Support', path: '/login', icon: help },

  ],
  signin: [
    { title: 'Signin', path: '/login', icon: logIn },
  ]

};

interface Pages {
  title: string,
  path: string,
  icon: string,
}
interface Props extends RouteComponentProps { };

const Menu = () => {
  const [activePage, setActivePage] = useState(routes.appPages[0].title);
  const [showPopover, setShowPopover] = useState<{ open: boolean, event: Event | undefined }>({
    open: false,
    event: undefined
  });

  const router = useRouter();
  const auth = useAuth();

  console.log("Salut je suis heureux" + "    " + !!auth.user)

  function renderlistItems(list: Pages[]) {
    return list
      .filter(route => !!route.path)
      .map(page => (
        <>
          <IonItem button
            color={page.title === activePage ? 'primary' : ''}
            onClick={() => navigateToPage(page)}
            routerLink={page.path}
          >
            <IonIcon slot="start" icon={page.icon}></IonIcon>
            <IonLabel>
              {page.title}
            </IonLabel>
          </IonItem>
        </>
      ))
  }

  const navigateToPage = (page: Pages) => {
    //history.push(page.path);
    if (page.title === "Logout") {
      console.log(page.title)
      auth.signout();
      setActivePage(page.title);
      setShowPopover({ open: false, event: undefined })
      console.log(page.path)

    } else {
      //router.push(page.path)
      setActivePage(page.title);
      setShowPopover({ open: false, event: undefined })
      console.log(page.path)
    }
  }

  if (auth.user) {
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
          <IonIcon slot="end" icon={ellipsisHorizontal}></IonIcon>
        </IonButton>
      </>
    );
  } {

    return (
      <>
        <IonPopover
          isOpen={showPopover.open}
          event={showPopover.event}
          onDidDismiss={e => setShowPopover({ open: false, event: undefined })}
        >
          {renderlistItems(routes.signin)}

        </IonPopover>

        <IonButton onClick={(e) => setShowPopover({ open: true, event: e.nativeEvent })}>
          <IonIcon slot="start" icon={person}></IonIcon>
        </IonButton>

      </>

    );

  }
}


export default Menu

//export default withRouter(
 // Menu
//);




