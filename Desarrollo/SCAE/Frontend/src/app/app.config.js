'use strict';

import routing from './configuration/routing';

configuration.$inject = ['$urlRouterProvider','$stateProvider']

export default function configuration($urlRouterProvider,$stateProvider){
    routing($urlRouterProvider,$stateProvider);
}