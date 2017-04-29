'use strict';

import angular from 'angular';
import mainToolbarComponent from './main-toolbar.component';
import angularMaterial from 'angular-material';

export default angular  
    .module('app.components.main-toolbar',[angularMaterial])
    .component('mainToolbar',mainToolbarComponent)
    .name;