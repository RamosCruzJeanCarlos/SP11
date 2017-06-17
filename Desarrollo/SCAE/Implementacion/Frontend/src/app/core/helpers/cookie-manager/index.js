'use strict';

import angular from 'angular';
import cookieManagerConfiguration from './cookie-manager.config';
import CookieManagerService from './cookie-manager.service';
import cookieManagerRun from './cookie-manager.run';
import angularCookies from 'angular-cookies';
import angularResource from 'angular-resource';

export default angular
    .module('app.core.helpers.cookie-manager',[angularCookies,angularResource])
    .run(cookieManagerRun)
    .config(cookieManagerConfiguration)
    .service('cookieManager',CookieManagerService)    
    .name;