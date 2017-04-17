'use strict';

import angular from 'angular';
import LoadingIndicatorComponent from './loading-indicator.component';
import LoadingIndicatorController from './loading-indicator.controller';

var angularMaterial = require('angular-material');

export default angular
    .module('components.shared.loading-indicator',[angularMaterial])
    .controller(LoadingIndicatorController.name,LoadingIndicatorController)
    .component('loadingIndicator',LoadingIndicatorComponent)
    .name;