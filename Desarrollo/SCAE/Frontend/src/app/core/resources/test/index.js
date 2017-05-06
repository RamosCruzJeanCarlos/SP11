'use strict';

import angular from 'angular';
import testUsersResource from './test-users-resource';
import testStudentsResource from './test-students-resource';

export default angular
    .module('app.core.resources.test',[testUsersResource,testStudentsResource])
    .name;