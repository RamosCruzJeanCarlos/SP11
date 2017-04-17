'use strict';

import angular          from 'angular';
import loginController  from './login.controller';
import loginComponent   from './login.component';
import uirouter         from 'angular-ui-router';

var angularMaterial = require('angular-material');

export default angular
    .module('components.login',[angularMaterial,uirouter])
    .controller(loginController.name,loginController)
    .component('login',loginComponent)
    .name;
