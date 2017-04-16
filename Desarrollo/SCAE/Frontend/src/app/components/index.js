'use strict';

import angular from 'angular';
import dashboard from './dashboard';
import login from './login';

export default angular
    .module('components',[dashboard,login])
    .name;