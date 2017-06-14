'use strict';

import angular from 'angular';

//components
import mainToolbar from './main-toolbar';
import mainSidenav from './main-sidenav';
import userProfile from './user-profile';
import mainMenu from './main-menu';

export default angular
    .module('app.components',[mainToolbar,mainSidenav,userProfile,mainMenu])
    .name;