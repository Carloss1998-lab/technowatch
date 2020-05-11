import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { calendar, location, informationCircle, people } from 'ionicons/icons';

import { ellipse, images, square, triangle, statsChartOutline, cartOutline, optionsOutline } from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';


interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

    return (

        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path="/tabs" to="/tabs/tab1" />
                <Route path="/tabs/tab1" component={Tab1} exact={true} />
                <Route path="/tabs/tab2" component={Tab2} exact={true} />
                <Route path="/tabs/tab3" component={Tab3} />
                <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tabs/tab1">
                    <IonIcon icon={statsChartOutline} />
                    <IonLabel>Dashboard</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tabs/tab2">
                    <IonIcon icon={cartOutline} />
                    <IonLabel>Product</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tabs/tab3">
                    <IonIcon icon={optionsOutline} />
                    <IonLabel>Offers</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>

    );
};

export default MainTabs;