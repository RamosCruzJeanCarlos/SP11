'use strict';

import angular from 'angular';
import testUserResource from './test-user-resource';

export default angular
    .module('app.core.resources.test',[testUserResource])
    .name;