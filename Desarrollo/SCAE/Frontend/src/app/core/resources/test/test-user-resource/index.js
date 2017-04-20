'use strict';

import angular from 'angular';
import angularResource from 'angular-resource';
import testUserResourceService from './test-user-resource.service';

export default angular
    .module('app.core.resources.test.test-user-resource',[angularResource])
    .service('TestUserResourceService',testUserResourceService)
    .name;