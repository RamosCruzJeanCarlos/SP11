'use strict';

import angular from 'angular';
import testResources from'./test';
import remoteResources from './remote';

export default angular
    .module('app.core.resources',[testResources,remoteResources])
    .name;