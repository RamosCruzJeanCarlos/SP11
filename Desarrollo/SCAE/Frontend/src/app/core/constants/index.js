'use strict';

import angular from 'angular';
import constants from './constants';

export default angular
    .module('app.core.constants',[])
    .constant('constants',constants)
    .name;