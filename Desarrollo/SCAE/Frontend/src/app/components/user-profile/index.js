'use strict';

import angular from 'angular';
import angularMaterial from 'angular-material';
import angularUiRouter from 'angular-ui-router';
import userProfileComponent from './user-profile.component';


export default angular
    .module('app.components.user-profile',[angularMaterial,angularUiRouter])
    .component('userProfile',userProfileComponent)
    .name;