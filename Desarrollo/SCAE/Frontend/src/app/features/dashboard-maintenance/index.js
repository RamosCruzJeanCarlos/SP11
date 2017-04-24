'use strict';

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import dashboardMaintenanceComponent from './dashboard-maintenance.component';

export default angular
    .module('app.features.dashboard-maintenance',[angularUiRouter])
    .component('dashboardMaintenance',dashboardMaintenanceComponent)
    .name;