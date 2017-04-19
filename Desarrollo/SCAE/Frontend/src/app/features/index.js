'use strict';

import angular from 'angular';
import core from '../core';
import components from '../components';
import login from './login';
import dashboard from './dashboard';

export default angular
    .module('app.features',[core,components,dashboard,login])
    .name;