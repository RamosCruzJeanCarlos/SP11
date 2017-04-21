'use strict';

import angular from 'angular';
import angularResource from 'angular-resource';
import constants from '../../../constants';
import testUsersResourceService from './test-users-resource.service';

export default angular
    .module('app.core.resources.test.test-users-resource',[angularResource,constants])
    .service('TestUsersResource',testUsersResourceService)
    .name;