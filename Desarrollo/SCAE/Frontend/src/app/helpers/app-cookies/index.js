'use strict';

import angular from 'angular';
import appCookiesService from './app-cookies.service';
import angularCookies       from 'angular-cookies';
import angularResource      from 'angular-resource';

export default angular
    .module('helpers.app-cookies',[angularCookies,angularResource])
    .service(appCookiesService.name,appCookiesService)    
    .name;