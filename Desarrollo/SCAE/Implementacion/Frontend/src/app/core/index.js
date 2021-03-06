'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import configuration from './core.config';
import constants from './constants';
import helpers from './helpers';
import utils from './utils';
import resources from './resources';
import services from './services';

export default angular
    .module('app.core',[uirouter,angularMaterial,constants,helpers,utils,resources,services])
    .config(configuration)
    .name;