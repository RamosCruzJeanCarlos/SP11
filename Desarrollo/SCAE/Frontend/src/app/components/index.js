'use strict';

import angular from 'angular';

//components
import mainToolbar from './main-toolbar';
import mainSidenav from './main-sidenav';

export default angular
    .module('app.components',[mainToolbar,mainSidenav])
    .name;