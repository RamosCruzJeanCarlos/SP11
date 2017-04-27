'use strict';

import angular from 'angular';
import angularMaterial from 'angular-material';
import angularMaterialDataTable from 'angular-material-data-table';
import core from '../../core';
import dashboardMaintenanceStudentsComponent from './dashboard-maintenance-students.component';

export default angular
    .module('app.features.dashboard-maintenance-students',[angularMaterial,angularMaterialDataTable])
    .component('dashboardMaintenanceStudents',dashboardMaintenanceStudentsComponent)
    .name;