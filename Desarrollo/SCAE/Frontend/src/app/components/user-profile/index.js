'use strict';

import angular from 'angular';
import angularMaterial from 'angular-material';
import userProfileComponent from './user-profile.component';


export default angular
    .module('app.components.user-profile',[angularMaterial])
    .component('userProfile',userProfileComponent)
    .name;