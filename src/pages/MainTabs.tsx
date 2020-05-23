import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { calendar, location, informationCircle, people } from 'ionicons/icons';

import { ellipse, images, square, triangle, statsChartOutline, cartOutline, optionsOutline, terminalOutline, barChartOutline } from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';



interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

    return (

        <IonTabs>
            <IonRouterOutlet>
                <Redirect to="/tabs/tab1" />
                <Route path="/tabs/tab1" component={Tab1} />
                <Route path="/tabs/tab2" component={Tab2} exact={true} />
                <Route path="/tabs/tab3" component={Tab3} exact={true} />
                <Route path="/tabs/tab4" component={Tab4} />
                <Route path="/" render={() => <Redirect to="/tabs/tab1" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tabs/tab1">
                    <IonIcon icon={terminalOutline} />
                    <IonLabel>Frameworks</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tabs/tab2">
                    <IonIcon icon={barChartOutline} />
                    <IonLabel>Stats</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tabs/tab3">
                    <IonIcon icon={optionsOutline} />
                    <IonLabel>Organisations</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab4" href="/tabs/tab4">
                    <IonIcon icon={optionsOutline} />
                    <IonLabel>Topics</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>

    );
};

export default MainTabs;