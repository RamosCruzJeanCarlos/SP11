'use strict';

import angular from 'angular';
import cookieManagerConfiguration from './cookie-manager.config';
import cookieManagerService from './cookie-manager.service';
import angularCookies from 'angular-cookies';
import angularResource from 'angular-resource';

export default angular
    .module('app.core.helpers.cookie-manager',[angularCookies,angularResource])
    .config(cookieManagerConfiguration)
    .service(cookieManagerService.name,cookieManagerService)    
    .name;