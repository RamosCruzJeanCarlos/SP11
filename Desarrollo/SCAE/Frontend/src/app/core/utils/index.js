'use strict';

import angular from 'angular';
import loadingModal from './loading-modal';
import crudDialog from './crud-dialog';

export default angular
    .module('app.core.utils',[loadingModal,crudDialog])
    .name;