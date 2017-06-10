'use strict';

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import dashboardMaintenanceConfig from './dashboard-maintenance.config';
import dashboardMaintenanceComponent from './dashboard-maintenance.component';
import dashboardMaintenanceStudents from '../dashboard-maintenance-students';

export default angular
    .module('app.features.dashboard-maintenance',[angularUiRouter,dashboardMaintenanceStudents])
    .config(dashboardMaintenanceConfig)
    .component('dashboardMaintenance',dashboardMaintenanceComponent)
    .name;