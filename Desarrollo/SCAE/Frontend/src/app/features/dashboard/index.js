"use strict";

import angular              from 'angular';
import DashboardConfig      from './dashboard.config';
import DashboardComponent   from './dashboard.component';
import DashboardController  from './dashboard.controller';
import Home                 from './home/';

export default angular  
    .module('components.dashboard',[Home])
    .config(DashboardConfig)
    .controller(DashboardController.name,DashboardController)
    .component('dashboard',DashboardComponent)
    .name;