'use strict';

import angular from 'angular';
import angularMaterial from 'angular-material';
import core from '../../core';
import dashboardMaintenanceStudentsComponent from './dashboard-maintenance-students.component';

export default angular
    .module('app.features.dashboard-maintenance-students',[angularMaterial])
    .component('dashboardMaintenanceStudents',dashboardMaintenanceStudentsComponent)
    .name;