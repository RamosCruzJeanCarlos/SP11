'use strict';

import angular from 'angular';
import configuration from './core.config';
import constants from './constants';
import helpers from './helpers';
import utils from './utils';
import resources from './resources';
import uirouter from 'angular-ui-router';

export default angular
    .module('app.core',[uirouter,constants,helpers,utils,resources])
    .config(configuration)
    .name;