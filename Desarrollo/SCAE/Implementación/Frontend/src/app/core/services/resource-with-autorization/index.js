'use strict';

import angular from 'angular';
import appResourceService from './app-resource.service';

export default angular
    .module('helpers.angular-resource',[])
    .service(appResourceService.name,appResourceService)
    .name;