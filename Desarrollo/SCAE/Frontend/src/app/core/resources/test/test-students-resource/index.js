'use strict';

import angular from 'angular';
import angularResource from 'angular-resource';
import constants from '../../../constants';
import testStudentsResourceService from './test-students-resource.service';

export default angular
    .module('app.core.resources.test.test-students-resource',[angularResource,constants])
    .service('TestStudentsResource',testStudentsResourceService)
    .name;