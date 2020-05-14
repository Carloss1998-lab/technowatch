import React from 'react';
import { IonApp, IonSplitPane, IonPage, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';
import { Redirect } from 'react-router-dom';
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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Liste from "./components/Liste"
import Geoloc from "./components/Geoloc"
import About from './components/About';
import SideMenu from "./components/SideMenu"
import Menu from "./components/Menu"
import Bulle from "./pages/Bulle"
import { menuController } from '@ionic/core';
import Login from './components/Login';
import Register from './components/Register';
import Infos from './components/Infos';
import Update from './components/UpdateAccount'

const App = () => (
  <Router>
    <div id="app">
      <IonApp>
        <IonHeader>
          <IonToolbar color="danger">
            <IonButtons slot="end">
              <IonMenuButton autoHide={false}></IonMenuButton>
            </IonButtons>
            <IonTitle>yStats</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonReactRouter>
            <Menu></Menu>
            <IonPage id="main">
              <Switch>
                <Route path="/tabs" component={MainTabs}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/infos" component={Infos}></Route>
                <Route path="/updateaccount" component={Update}></Route>

              </Switch>
            </IonPage>

          </IonReactRouter>
        </IonContent>
      </IonApp>
    </div>
  </Router>
);


export default App;