"use strict";

import angular from 'angular';
import core from '../../core';
import components from '../../components';
import dashboardConfig from './dashboard.config';
import dashboardComponent from './dashboard.component';
import dashboardHome from '../dashboard-home';

export default angular  
    .module('app.features.dashboard',[core,components,dashboardHome])
    .config(dashboardConfig)
    .component('dashboard',dashboardComponent)
    .name;