'use strict';

import angular from 'angular';
import mainSidenavComponent from './main-sidenav.component';
import angularMaterial from 'angular-material';

export default angular
    .module('app.components.main-sidenav',[angularMaterial])
    .component('mainSidenav',mainSidenavComponent)
    .name;

