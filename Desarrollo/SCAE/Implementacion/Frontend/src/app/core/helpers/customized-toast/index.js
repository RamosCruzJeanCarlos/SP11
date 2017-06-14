'use strict';

import angular from 'angular';
import angularMaterial from 'angular-material';
import customizedToastService from './customized-toast.service';

export default angular
    .module('app.core.helpers.positioned-toast',[angularMaterial])
    .service('CustomizedToast',customizedToastService)
    .name;