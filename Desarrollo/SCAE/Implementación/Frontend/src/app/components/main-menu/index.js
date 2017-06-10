'use strict';

import angular from 'angular';
import angularMaterial from 'angular-material';
import angularUiRouter from 'angular-ui-router';
import mainMenuComponent from './main-menu.component';

export default angular
    .module('app.components.main-menu',[angularMaterial])
    .component('mainMenu',mainMenuComponent)
    .name;
