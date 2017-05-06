'use strict';

import angular from 'angular';
import core from '../../core';
import mainToolbarComponent from './main-toolbar.component';
import angularMaterial from 'angular-material';

export default angular  
    .module('app.components.main-toolbar',[core,angularMaterial])
    .component('mainToolbar',mainToolbarComponent)
    .name;