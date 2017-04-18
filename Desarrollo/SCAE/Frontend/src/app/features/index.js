'use strict';

import angular from 'angular';
import login from './login';
import dashboard from './dashboard';

export default angular
    .module('app.features',[dashboard,login])
    .name;