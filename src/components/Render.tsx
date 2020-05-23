import React, { useState, useEffect } from 'react';
import { useAuth } from "../util/auth.js";
import Login from "./Login";
import MainTabs from '.././pages/aMainTabs';


const Render = () => {

    const auth = useAuth();
    if (auth.user) {
        return <MainTabs></MainTabs>;
    } else {
        return <Login></Login>;
    }
};

export default Render;
