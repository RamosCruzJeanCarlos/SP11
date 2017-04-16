'use strict';

import routing from './config.routing';
import cookies from './config.cookies';

configuration.$inject = ['$urlRouterProvider','$stateProvider','$cookiesProvider']

export default function configuration($urlRouterProvider,$stateProvider,$cookiesProvider){
    routing($urlRouterProvider,$stateProvider);
    cookies($cookiesProvider);
    console.log('App was configred successfully');
}