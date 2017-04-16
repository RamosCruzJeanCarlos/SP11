'use strict';

import angular from 'angular';
import LoadingModalComponent from './loading-modal.component';
import LoadingModalController from './loading-modal.controller';
import LoadingModalService from './loading-modal.service';

var angularMaterial = require('angular-material');

export default angular
    .module('utilities.loading-modal',[angularMaterial])
    .controller(LoadingModalController.name,LoadingModalController)
    .component('loadingModal',LoadingModalComponent)
    .service('loadingModalService',LoadingModalService)    
    .name;