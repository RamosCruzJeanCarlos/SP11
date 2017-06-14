'use strict';

import angular from 'angular';
import loadingModalService from './loading-modal.service';
import loadingModalComponent from './loading-modal.component';

var angularMaterial = require('angular-material');

export default angular
    .module('app.core.utils.loading-modal',[angularMaterial])
    .component('loadingModal',loadingModalComponent)
    .service('LoadingModal',loadingModalService)    
    .name;