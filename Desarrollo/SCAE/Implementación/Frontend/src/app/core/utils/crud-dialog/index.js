'use strict';

import angular from 'angular';
import angularMaterial from 'angular-material';
import crudDialogService from './crud-dialog.service';

export default angular
    .module('app.core.utils.crud-dialog',[angularMaterial])
    .service('CrudDialogService',crudDialogService)
    .name;