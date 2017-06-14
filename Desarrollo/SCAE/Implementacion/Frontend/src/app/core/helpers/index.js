import angular from 'angular';
import cookieManager from './cookie-manager';
import customizedToast from './customized-toast';

export default angular
    .module('app.core.helpers',[cookieManager,customizedToast])    
    .name;