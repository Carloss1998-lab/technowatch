import React from "react";
import "./styles/global.scss";
import NavbarCustom from "./components/NavbarCustom";
import IndexPage from "./pages/index";
import AboutPage from "./pages/about";
import FaqPage from "./pages/faq";
import PricingPage from "./pages/pricing";
import ContactPage from "./pages/contact";
import DashboardPage from "./pages/dashboard";
import AuthTypePage from "./pages/authtype";
import SettingsPage from "./pages/settings";
import { Switch, Route, Router } from "./util/router.js";
import Footer from "./components/Footer";
import { ProvideAuth } from "./util/auth.js";
import aMainTabs from "./pages/aMainTabs";

import Login from "./components/Login";
import Tab1 from './pages/Tab1';
import { IonApp, IonSplitPane, IonPage, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';


function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <IonPage>

            <NavbarCustom
              bg="primary"
              variant="dark"
              expand="md"
              logo="https://uploads.divjoy.com/logo-white.svg"
            ></NavbarCustom>



            <Switch>
              <Route exact path="/" component={IndexPage} />

              <Route exact path="/about" component={Login} />
              <Route exact path="/tabs" component={aMainTabs} />
              <Route exact path="/faq" component={FaqPage} />

              <Route exact path="/pricing" component={Tab1} />

              <Route exact path="/contact" component={ContactPage} />

              <Route exact path="/dashboard" component={DashboardPage} />

              <Route exact path="/auth/:type" component={AuthTypePage} />


              <Route
                component={({ location }) => {
                  return (
                    <div
                      style={{
                        padding: "50px",
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
                      The page <code>{location.pathname}</code> could not be
                    found.
                    </div>
                  );
                }}
              />
            </Switch>

            <Footer
              bg="white"
              textColor="dark"
              size="md"
              bgImage=""
              bgImageOpacity={1}
              description="A short description of what you do here"
              copyright="© 2019 Company"
              logo="https://uploads.divjoy.com/logo.svg"
            ></Footer>
          </IonPage>

        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
