'use strict';

import angular from 'angular';
import loadingModalService from './loading-modal.service';
import loadingModalController from './loading-modal.controller';
import loadingModalComponent from './loading-modal.component';

var angularMaterial = require('angular-material');

export default angular
    .module('app.core.utils.loading-modal',[angularMaterial])
    .controller(loadingModalController.name,loadingModalController)
    .component('loadingModal',loadingModalComponent)
    .service(loadingModalService.name,loadingModalService)    
    .name;