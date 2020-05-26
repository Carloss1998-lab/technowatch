import React from 'react';
import { IonApp, IonSplitPane, IonPage, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import Render from './components/Render';
import MainTabs from './pages/MainTabs';

import {
  IonMenuButton, IonButton, IonButtons,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, images, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Home from './components/Home';
import Liste from "./components/Liste"
import Geoloc from "./components/Geoloc"
import About from './components/About';
import SideMenu from "./components/SideMenu"
import Menu from "./components/Menu"
//import { PopoverExample } from "./components/Menu"

import { ellipsisHorizontal } from 'ionicons/icons';

import { menuController } from '@ionic/core';
import Register from './components/Register';
import Infos from './components/Infos';
import Update from './components/UpdateAccount'
import "./styles/global.scss";

import { Switch, Route, Router } from "./util/router.js";
import { ProvideAuth } from "./util/auth.js";
import aMainTabs from "./pages/aMainTabs";
import InfosDetails from "./components/InfosDetails"
import Login from "./components/Login";
import Menue from "./components/moenu"
import { useLocation } from 'react-router';
import { useAuth } from "./util/auth.js";
import InfosResearch from './components/InfosResearch';

//import {uselocation} from
//const location = useLocation();
//const auth = useAuth();

const App = () => {
  // const location = useLocation()
  const auth = useAuth();

  return (
    <ProvideAuth>
      <Router>
        <div id="app">
          <IonApp>
            <IonHeader>
              <IonToolbar color="danger">
                <IonButtons slot="start">
                  <IonMenuButton autoHide={false} ></IonMenuButton>

                </IonButtons>

                <IonButtons slot="primary">
                  <Menu></Menu>

                </IonButtons>

                <IonTitle class="ion-text-center">yStats</IonTitle>
              </IonToolbar>

            </IonHeader>

            <IonContent>
              <IonReactRouter>
                <Menue></Menue>
                <IonPage id="main">
                  <Switch>
                    <Route path="/tabs" component={Render}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route exact path="/infos/:techno" component={Infos}></Route>
                    <Route exact path="/infos/:search" component={InfosResearch}></Route>
                    <Route path="/infos/:techno/:login/:techno_item" component={InfosDetails}></Route>
                    <Route path="/signedIn" component={MainTabs}></Route>
                    <Route path="/updateaccount" component={Update}></Route>
                    <Redirect from="/" to="/tabs" />

                  </Switch>
                </IonPage>

              </IonReactRouter>
            </IonContent>
          </IonApp>

        </div>
      </Router>
    </ProvideAuth>
  )
};


export default App;