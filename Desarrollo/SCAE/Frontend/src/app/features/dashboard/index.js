"use strict";

import angular from 'angular';
import appCore from '../../core';
import dashboardConfig from './dashboard.config';
import dashboardComponent from './dashboard.component';
import dashboardController from './dashboard.controller';
import dashboardHome from '../dashboard-home';
import dashboardMaintenance from '../dashboard-maintenance';
import dashboardReports from '../dashboard-reports';

export default angular  
    .module('app.features.dashboard',[appCore,dashboardHome,dashboardMaintenance,dashboardReports])
    .config(dashboardConfig)
    .controller(dashboardController.name,dashboardController)
    .component('dashboard',dashboardComponent)
    .name;