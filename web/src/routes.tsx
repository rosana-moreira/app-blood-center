import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import BloodCenter from './pages/BloodCenter';
import BloodCenterMap from './pages/BloodCenterMap';
import CreateBloodCenter from './pages/CreateBloodCenter';
import CreateUser from './pages/CreateUser';



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={BloodCenterMap} />
                <Route path="/bloodcenter/create" component={CreateBloodCenter} />
                <Route path="/bloodcenter/list/:id" component={BloodCenter} />
                <Route path="/users/create" component={CreateUser} />

            </Switch>
        </BrowserRouter>

    );
}

export default Routes;