'use strict';

import angular from 'angular';
import securityManager from './security-manager';

export default angular
    .module('app.core.services',[securityManager])
    .name;