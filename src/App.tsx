import React from 'react';
import { IonApp, IonPage, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import Render from './components/Render';
import MainTabs from './pages/MainTabs';
import InfosOrganizations from './components/InfosOrganizations'
import InfosResearchOrganizations from './components/InfosResearchOrganizations';
import Stats from './components/Stats';

import {
  IonMenuButton, IonButtons,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


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

import Menu from "./components/Menu"


import Register from './components/Register';
import Infos from './components/Infos';
import Update from './components/UpdateAccount'
import "./styles/global.scss";

import { Switch, Route, Router } from "./util/router.js";
import { ProvideAuth } from "./util/auth.js";
import InfosDetails from "./components/InfosDetails"
import Login from "./components/Login";
import Menue from "./components/moenu"
import { useAuth } from "./util/auth.js";
import InfosResearch from './components/InfosResearch';
import InfosTopics from './components/InfosTopics';
import InfosResearchTopics from './components/InfosResearchTopics'
import ExploreContainer2 from './components/ExploreContainer2';
import Sidemenu from "./components/SideMenu"


const App = () => {
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
                    <Route exact path="/tabs/tab4/:pseudo/:repository" component={Stats}></Route>
                    <Route path="/tabs" component={Render}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route exact path="/infos/Topics/:topic" component={InfosTopics}></Route>
                    <Route exact path="/infos/Topics/search/:search" component={InfosResearchTopics}></Route>
                    <Route exact path="/infos/Organizations/:org" component={InfosOrganizations}></Route>
                    <Route exact path="/infos/Organizations/search/:search" component={InfosResearchOrganizations}></Route>
                    <Route exact path="/infos/:heading/:techno" component={Infos}></Route>
                    <Route exact path="/infos/Organizations/search/:techno/:login/:techno_item" component={InfosDetails}></Route>
                    <Route exact path="/infos/:heading/search/:search" component={InfosResearch}></Route>
                    <Route path="/infos/:heading/:techno/:login/:techno_item" component={InfosDetails}></Route>
                    <Route exact path="/infos/:heading/search/:techno/:login/:techno_item" component={InfosDetails}></Route>
                    <Route path="/signedIn" component={MainTabs}></Route>
                    <Route path="/AjoutPreference" component={ExploreContainer2}></Route>
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


