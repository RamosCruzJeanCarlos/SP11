'use strict';

import angular from 'angular';
import appCore from '../../core';
import HomeController from './home.controller';
import HomeComponent from './home.component';

export default angular
    .module('app.features.dashboard-home',[appCore])
    .controller(HomeController.name,HomeController)
    .component('home',HomeComponent)
    .name;