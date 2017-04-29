"use strict";

import angular from 'angular';
import core from '../../core';
import components from '../../components';
import dashboardConfig from './dashboard.config';
import dashboardComponent from './dashboard.component';
import dashboardHome from '../dashboard-home';
//import dashboardMaintenance from '../dashboard-maintenance';
//import dashboardReports from '../dashboard-reports';

export default angular  
    .module('app.features.dashboard',[core,components,dashboardHome,/*dashboardMaintenance,dashboardReports*/])
    .config(dashboardConfig)
    .component('dashboard',dashboardComponent)
    .name;