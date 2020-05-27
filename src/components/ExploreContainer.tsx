import React, { useState, useEffect } from "react";
//import "./ExploreContainer.css";
import Preferences from "./ListePreference";
import { getPreferences } from ".././stockage/base";
import { Preference } from ".././stockage/Preference";


const ExploreContainer: React.FC = () => {
  const [preferences, setPreferences] = useState<Preference[]>([]);

  useEffect(() => {
    getPreferences().then((res) => setPreferences(res));
  }, []);

  return (
    <>
      <Preferences preferences={preferences}></Preferences>
    </>
  );
};

export default ExploreContainer;



