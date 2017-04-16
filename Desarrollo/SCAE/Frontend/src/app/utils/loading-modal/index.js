'use strict';

import angular from 'angular';
import LoadingModalService from './loading-modal.service';
import LoadingIndicator from '../../components/shared/loading-indicator';

var angularMaterial = require('angular-material');

export default angular
    .module('utils.loading-modal',[LoadingIndicator])
    .service(LoadingModalService.name,LoadingModalService)    
    .name;