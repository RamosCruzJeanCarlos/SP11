'use strict';

//vendor dependencies
import angular          from 'angular';
import uirouter         from 'angular-ui-router';
import angularAnimate   from 'angular-animate';
import angularAria      from 'angular-aria';
import angularMessages  from 'angular-messages';

//app 
import config           from './config';
import constants        from './constants';

//components
import login            from './components/login';
import dashboard        from './components/dashboard';    

//services and utils
//services ares globally available(No matter what module they are in).
import loginModal       from './utils/loading-modal';

angular.module('app',[
    uirouter,  
    login,    
    dashboard,  
])
.config(config)
.constant('constants',constants);