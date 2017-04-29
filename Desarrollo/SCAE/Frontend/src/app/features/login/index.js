'use strict';

import angular from 'angular';
import appCore from '../../core';
import loginComponent from './login.component';
import uirouter from 'angular-ui-router';

var angularMaterial = require('angular-material');

export default angular
    .module('app.features.login',[appCore,angularMaterial,uirouter])
    .component('login',loginComponent)
    .name;
