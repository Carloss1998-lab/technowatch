import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { terminalOutline, happy, bulb, briefcase } from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';



interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

    return (

        <IonTabs >
            <IonRouterOutlet>
                <Redirect exact path="/tabs" to="/tabs/tab1" />
                <Route path="/tabs/tab1" component={Tab1} exact={true} />
                <Route path="/tabs/tab2" component={Tab2} exact={true} />
                <Route path="/tabs/tab3" component={Tab3} exact={true} />
                <Route path="/tabs/tab4" component={Tab4} />
                <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tabs/tab1">
                    <IonIcon icon={terminalOutline} />
                    <IonLabel>Stats & Frameworks</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tabs/tab2">
                    <IonIcon icon={bulb} />
                    <IonLabel>Topics</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tabs/tab3">
                    <IonIcon icon={briefcase} />
                    <IonBadge slot="end">22</IonBadge>
                    <IonLabel>Organizations</IonLabel>

                </IonTabButton>

                <IonTabButton tab="tab4" href="/tabs/tab4">
                    <IonIcon icon={happy} />
                    <IonLabel>Preferences</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>

    );
};

export default MainTabs;