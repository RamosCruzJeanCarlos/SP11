'use strict';

import angular from 'angular';
import angularResource from 'angular-resource';
import constants from '../../constants';
import remoteUsersResource from './remote-users-resource';

export default angular
    .module('app.core.resources.remote',[angularResource,constants])
    .service('remoteUsersResource',remoteUsersResource)
    .name;