'use strict';

import angular          from 'angular';
import LoginController  from './login.controller';
import LoginComponent   from './login.component';

var angularMaterial = require('angular-material');

export default angular
    .module('components.login',[angularMaterial])
    .controller(LoginController.name,LoginController)
    .component('login',LoginComponent)
    .name;
