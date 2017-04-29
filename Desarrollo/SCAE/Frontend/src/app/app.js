'use strict';

//vendor dependencies
import angular from 'angular';
import core from './core';
import features from './features';
import components from './components';

angular.module('app',[
    core,
    features,
    components
]);