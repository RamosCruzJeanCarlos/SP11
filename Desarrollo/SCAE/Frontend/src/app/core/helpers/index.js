import angular from 'angular';
import cookieManager from './cookie-manager';

export default angular
    .module('app.core.helpers',[cookieManager])    
    .name;