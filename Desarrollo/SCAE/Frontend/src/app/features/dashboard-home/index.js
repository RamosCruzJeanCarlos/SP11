'use strict';

import angular from 'angular';
import appCore from '../../core';
import HomeComponent from './dashboard-home.component';

export default angular
    .module('app.features.dashboard-home',[appCore])
    .component('home',HomeComponent)
    .name;