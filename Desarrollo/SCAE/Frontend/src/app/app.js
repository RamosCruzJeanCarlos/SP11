'use strict';

//vendor dependencies
import angular          from 'angular';
import uirouter         from 'angular-ui-router';
import angularAnimate   from 'angular-animate';
import angularAria      from 'angular-aria';
import angularMessages  from 'angular-messages';
import angularCookies   from 'angular-cookies';

import config           from './config';
import constants        from './constants';
import run              from './run';
import components       from './components';
import utils            from './utils/';
import helpers          from './helpers/';

angular.module('app',[
    uirouter,      
    angularCookies,//for cookie path configuration
    utils,
    helpers,
    components
])
.config(config)
.run(run)
.constant('constants',constants);