'use strict';

import angular          from 'angular';
import uirouter         from 'angular-ui-router';
import configuration    from './app.config';
import angularAnimate   from 'angular-animate';
import angularAria      from 'angular-aria';
import angularMessages  from 'angular-messages';
import login            from './components/login/';
import loadingModal     from './utilities/loading-modal/';


angular.module('app-scae',[
    uirouter,  
    loadingModal,
    login,      
])
.config(configuration);