'use strict';

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import helpers from '../../helpers';
import resources from '../../resources';
import sercurityManagerService from './security-manager.service.js';

export default angular
    .module('app.core.services.security-manager',[angularUiRouter,helpers,resources])
    .service('securityManager',sercurityManagerService)
    .name;
    
