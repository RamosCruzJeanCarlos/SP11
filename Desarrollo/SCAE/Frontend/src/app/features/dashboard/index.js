"use strict";

import angular from 'angular';
import core from '../../core';
import components from '../../components';
import dashboardRun from './dashboard.run';
import dashboardConfig from './dashboard.config';
import dashboardComponent from './dashboard.component';
import dashboardHome from '../dashboard-home';
import dashboardMaintenance from '../dashboard-maintenance';

export default angular  
    .module('app.features.dashboard',[core,components,dashboardHome,dashboardMaintenance])
    .config(dashboardConfig)
    .run(dashboardRun)
    .component('dashboard',dashboardComponent)
    .name;