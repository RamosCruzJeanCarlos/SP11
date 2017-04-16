import angular from 'angular';
import appCookies from './app-cookies';
import appResource from './app-resource';

export default angular
    .module('helpers',[appCookies,appResource])
    .name;